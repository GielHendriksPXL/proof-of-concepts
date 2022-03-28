import { Component, OnInit } from '@angular/core';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';

@Component({
  selector: 'app-ngx-online-status',
  templateUrl: './ngx-online-status.component.html',
  styleUrls: ['./ngx-online-status.component.css']
})
export class NgxOnlineStatusComponent implements OnInit {
  status: string = "ONLINE";

  constructor(private onlineStatusService: OnlineStatusService) { }

  ngOnInit(): void {
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      if (status == 0) {
        this.status = "OFFLINE";
      } else if (status == 1) {
        this.status = "ONLINE";
      }
    });
  }
}
