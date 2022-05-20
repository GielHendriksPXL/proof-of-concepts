import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, concat, EMPTY, map, Observable, retry, share, throwError, timeout, TimeoutError } from 'rxjs';
import { SyncTask } from '../classes/sync-task';

@Injectable({
  providedIn: 'root'
})
export class SyncService {
  private HTTP_TIMEOUT_IN_MS: number = 5000;
  private STORAGE_KEY: string = 'syncTasks';

  constructor(private http: HttpClient) { }

  tryPostPayload<T>(url: string, payload: T, params: HttpParams): Observable<T> {
    return this.http.post<T>(url, payload, { params }).pipe(
      timeout(this.HTTP_TIMEOUT_IN_MS),
      retry(2),
      catchError((error: HttpErrorResponse) => this.handleError(error, url, payload, params)),
      share()
    );
  }

  private handleError<T>(
    err: HttpErrorResponse,
    url: string,
    payload: T,
    params: HttpParams
  ): Observable<any> {
    if (this.offlineOrBadConnection(err)) {
      this.addOrUpdateSyncTask<T>(url, payload, params);
      return EMPTY;
    } else {
      return throwError(err);
    }
  }

  private addOrUpdateSyncTask<T>(url: string, payload: T, params: HttpParams): void {
    const tasks = this.getExistingSyncTasks();

    const syncTask = new SyncTask(url, payload, params.toString());
    tasks.push(syncTask);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
  }

  getExistingSyncTasks(): SyncTask<any>[] {
    const serializedTasks = localStorage.getItem(this.STORAGE_KEY);

    return (serializedTasks)
      ? JSON.parse(serializedTasks)
      : [];
  }

  private offlineOrBadConnection(err: HttpErrorResponse): boolean {
    return (
      err instanceof TimeoutError ||
      err.error instanceof ErrorEvent ||
      !window.navigator.onLine
    );
  }

  sync(): Observable<any> {
    let syncTasks = this.getExistingSyncTasks();
    let requests: Observable<any>[] = [];

    syncTasks.forEach((task: SyncTask<any>) => {
      let params = { params: new HttpParams({ fromString: task.params }) };
      let obs$ = this.http.post(task.url, task.body, params)
        .pipe(map(_ => task));

      requests.push(obs$);
    });

    let all$ = concat(...requests).pipe(share());

    all$.subscribe(task => {
      let index = syncTasks.findIndex(t => t == task);
      syncTasks.splice(index, 1);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(syncTasks));
    });

    return all$;
  }
}
