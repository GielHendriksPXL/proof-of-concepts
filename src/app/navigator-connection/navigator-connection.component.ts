import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator-connection',
  templateUrl: './navigator-connection.component.html',
  styleUrls: ['./navigator-connection.component.css']
})
export class NavigatorConnectionComponent implements OnInit {
  type: any;

  constructor() {
    navigator.connection.addEventListener('change', this.logNetworkInfo);
  }

  logNetworkInfo() {
    // Network type that browser uses
    console.log('         type: ' + navigator.connection.type);
  }

  ngOnInit(): void {
    this.type = navigator.connection.type;
    console.log(this.type);
  }
}
