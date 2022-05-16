import { Component, OnInit } from '@angular/core';
import { SpeedTestService } from 'ng-speed-test';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-ng-speed-test',
  templateUrl: './ng-speed-test.component.html',
  styleUrls: ['./ng-speed-test.component.css']
})
export class NgSpeedTestComponent implements OnInit {
  status$!: Observable<string>;
  speed$!: Observable<number>;

  constructor(private speedTestService: SpeedTestService) { }

  ngOnInit(): void {
    this.speed$ = this.speedTestService.getMbps(
      {
        iterations: 10,
        file: {
          path: 'https://raw.githubusercontent.com/jrquick17/ng-speed-test/02c59e4afde67c35a5ba74014b91d44b33c0b3fe/demo/src/assets/500kb.jpg',
          size: 408949,
          shouldBustCache: true
        }
      }
    ).pipe(
      map(speed => {
        return speed;
      })
    );

    this.status$ = this.speedTestService.isOnline().pipe(
      map(isOnline => {
        return isOnline ? "ONLINE" : "OFFLINE";
      })
    );
  }
}
