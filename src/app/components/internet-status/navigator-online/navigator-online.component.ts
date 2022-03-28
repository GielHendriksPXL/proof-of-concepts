import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator-online',
  templateUrl: './navigator-online.component.html',
  styleUrls: ['./navigator-online.component.css']
})
export class NavigatorOnlineComponent implements OnInit {
  online = window.navigator.onLine;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('offline', function (e) {
      if (navigator.connection) {
        console.log('offline');
      }
    });
    window.addEventListener('online', function (e) {
      if (navigator.connection) {
        console.log('online');
      }
    });
  }

}
