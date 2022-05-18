import { Component, OnInit } from '@angular/core';
import { Key, NgxIndexedDBService } from 'ngx-indexed-db';
import { map, Observable, Subscription, switchMap, take } from 'rxjs';
import { ServiceWorkersService } from 'src/app/services/service-workers.service';

@Component({
  selector: 'app-indexeddb',
  templateUrl: './indexeddb.component.html',
  styleUrls: ['./indexeddb.component.css']
})
export class IndexeddbComponent implements OnInit {
  private databaseServiceSubscription!: Subscription;
  indexedDBContent$ = new Observable<string[]>();

  constructor(private serviceWorkersService: ServiceWorkersService, private databaseService: NgxIndexedDBService) { }

  ngOnInit(): void {
    this.get();
  }

  add() {
    this.databaseServiceSubscription = this.serviceWorkersService.getRandomJoke().pipe(
      switchMap((response) => {
        return this.databaseService.add('jokes', {
          joke: response.value
        });
      })
    ).subscribe(() => {
      this.get();
    });
  }

  get(): void {
    this.indexedDBContent$ = this.databaseService.getAll('jokes').pipe(
      map(response => {
        let content: string[] = [];
        response.forEach((element: any) => {
          content.push(`Id: ${element.id}, joke: ${element.joke}`);
        });
        return content;
      })
    );
  }

  empty(): void {
    this.databaseServiceSubscription = this.databaseService.getAll('jokes').pipe(
      map((response: any[]) => {
        return [...Array(response.length).keys()].map(i => i + response[0].id);
      }),
      switchMap((result: Key[]) => {
        return this.databaseService.bulkDelete('jokes', result);
      }),
      take(1)
    ).subscribe(() => {
      this.get();
    });
  }

  ngOnDestroy(): void {
    this.databaseServiceSubscription.unsubscribe();
  }
}
