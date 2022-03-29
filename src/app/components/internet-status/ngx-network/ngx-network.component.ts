import { Component, OnInit } from '@angular/core';
import { NgxNetworkService } from 'ngx-network';

@Component({
  selector: 'app-ng-network-status',
  templateUrl: './ngx-network.component.html',
  styleUrls: ['./ngx-network.component.css']
})
export class NgNetworkStatusComponent implements OnInit {
  speed: number = 0;

  constructor(private networkService: NgxNetworkService) { }

  ngOnInit(): void {
    /*this.networkService.onSpeedChanged().subscribe((networkSpeedInfo) => {
      this.speed = networkSpeedInfo.speed
      console.log(networkSpeedInfo);
    })*/

    setTimeout(() => {
      this.networkService.getSpeed().subscribe(async (networkSpeedInfo) => {
        this.speed = networkSpeedInfo.speed;
        console.log(this.speed);
      })
    }, 5000);

  }

}