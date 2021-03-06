import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-ng-connection-service',
  templateUrl: './ng-connection-service.component.html',
  styleUrls: ['./ng-connection-service.component.css']
})
export class NgConnectionServiceComponent implements OnInit {
  status$!: Observable<string>;

  constructor(private connectionService: ConnectionService) {
  }

  ngOnInit(): void {
    this.status$ = this.connectionService.monitor().pipe(
      map((isConnected) => {
        console.log("isConnected" + isConnected);
        return isConnected ? "ONLINE" : "OFFLINE";
      })
    );
  }
}
