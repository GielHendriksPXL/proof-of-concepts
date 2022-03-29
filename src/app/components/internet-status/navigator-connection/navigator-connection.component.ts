import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator-connection',
  templateUrl: './navigator-connection.component.html',
  styleUrls: ['./navigator-connection.component.css']
})
export class NavigatorConnectionComponent implements OnInit {
  type: string = navigator.connection.type;

  constructor() { }

  logNetworkInfo() {
    // Network type that browser uses
    this.type = navigator.connection.type;
    console.log("navigator.connection.type: " + navigator.connection.type);

    // This doesn't work in TypeScript
    // console.log("navigator.connection.downlinkMax: " + navigator.connection.downlinkMax);
    // console.log("navigator.connection.downlink: " + navigator.connection.downlink);
    // console.log("navigator.connection.effectiveType: " + navigator.connection.effectiveType);
    // console.log("navigator.connection.rtt: " + navigator.connection.rtt);

    // Solution with the network-information-types added
    // if (navigator.connection) {
    // console.log("navigator.connection.downlinkMax: " + navigator.connection.downlinkMax);
    // console.log("navigator.connection.downlink: " + navigator.connection.downlink);
    // console.log("navigator.connection.effectiveType: " + navigator.connection.effectiveType);
    // console.log("navigator.connection.rtt: " + navigator.connection.rtt);
    // }
    // Still doesn't work
  }

  ngOnInit(): void {
    navigator.connection.addEventListener('change', this.logNetworkInfo);
  }

}
