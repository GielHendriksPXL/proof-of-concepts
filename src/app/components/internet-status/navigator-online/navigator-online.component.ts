import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator-online',
  templateUrl: './navigator-online.component.html',
  styleUrls: ['./navigator-online.component.css']
})
export class NavigatorOnlineComponent implements OnInit {
  status: string = "ONLINE";

  constructor() { }

  ngOnInit(): void {
  }

  checkStatus() {
    if (window.navigator.onLine) {
      this.status = "ONLINE";
      console.log("navigator.onLine: " + window.navigator.onLine);
    } else {
      this.status = "OFFLINE";
      console.log("navigator.onLine: " + window.navigator.onLine);
    }
  }

}
