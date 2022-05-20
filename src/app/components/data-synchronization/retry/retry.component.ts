import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SyncTask } from 'src/app/classes/sync-task';
import { SyncService } from 'src/app/services/sync.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {
  syncTasks: SyncTask<any>[] = [];

  constructor(private syncService: SyncService) { }

  ngOnInit(): void {
  }

  sync(): void {
    this.syncService.sync();
  }

  doRequest(): void {
    this.syncService.tryPostPayload('https://reqres.in/api/posts', { title: 'Angular POST Request Example' }, new HttpParams()).subscribe();
  }

  getSyncTasks(): void {
    this.syncTasks = this.syncService.getExistingSyncTasks();
    console.log(this.syncTasks);
  }
}
