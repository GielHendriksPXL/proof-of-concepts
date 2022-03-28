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
    console.log('type: ' + navigator.connection.type);

    // This doesn't work in TypeScript
    // console.log("downlinkMax: " + navigator.connection.downlinkMax);
    // console.log("downlink: " + navigator.connection.downlink);
    // console.log("effectiveType: " + navigator.connection.effectiveType);
    // console.log("rtt: " + navigator.connection.rtt);  

    // Solution with the network-information-types
    // console.log("downlinkMax: " + navigator.connection.downlinkMax);
    // console.log("downlink: " + navigator.connection.downlink);
    // console.log("effectiveType: " + navigator.connection.effectiveType);
    // console.log("rtt: " + navigator.connection.rtt);  
}

  ngOnInit(): void {}
}
