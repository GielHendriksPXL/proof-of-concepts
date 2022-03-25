import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offline-online-event',
  templateUrl: './offline-online-event.component.html',
  styleUrls: ['./offline-online-event.component.css']
})
export class OfflineOnlineEventComponent implements OnInit {
  status: string = "ONLINE";

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('offline', () => {
      this.status = "OFFLINE";
      console.log(this.status);
    });

    window.addEventListener('online', () => {
      this.status = "ONLINE";
      console.log(this.status);
    })
  }

}
