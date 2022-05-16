import { Component, OnInit } from '@angular/core';
import { NgxNetworkService } from 'ngx-network';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-ngx-network',
  templateUrl: './ngx-network.component.html',
  styleUrls: ['./ngx-network.component.css']
})
export class NgxNetworkComponent implements OnInit {
  speed$!: Observable<number>;

  constructor(private networkService: NgxNetworkService) { }

  ngOnInit(): void {
    this.speed$ = this.networkService.getSpeed().pipe(
      map((networkSpeedInfo) => {
        return networkSpeedInfo.speed;
      })
    );
  }
}
