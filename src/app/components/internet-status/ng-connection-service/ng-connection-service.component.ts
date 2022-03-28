import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';

@Component({
  selector: 'app-ng-connection-service',
  templateUrl: './ng-connection-service.component.html',
  styleUrls: ['./ng-connection-service.component.css']
})
export class NgConnectionServiceComponent implements OnInit {
  status: string = "ONLINE";
  isConnected: boolean = true;

  constructor(private connectionService: ConnectionService) {
  }

  ngOnInit(): void {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = "ONLINE";
      }
      else {
        this.status = "OFFLINE";
      }
      console.log("ng-connection-service: " + this.status);
    })
  }

}
