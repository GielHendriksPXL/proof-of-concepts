import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator-online',
  templateUrl: './navigator-online.component.html',
  styleUrls: ['./navigator-online.component.css']
})
export class NavigatorOnlineComponent implements OnInit {
  online = window.navigator.onLine;
  type = window.navigator.connection.type;

  constructor() { }

  ngOnInit(): void {
    if (navigator.connection) {
      max = navigator.connection.downlinkMax;
    }
    window.addEventListener('offline', function (e) { console.log('offline') });
    window.addEventListener('online', function (e) { console.log('online') });
  }

}
