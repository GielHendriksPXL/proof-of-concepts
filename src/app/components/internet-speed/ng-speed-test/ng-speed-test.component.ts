import { Component, OnInit } from '@angular/core';
import { SpeedTestService } from 'ng-speed-test';
import { map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-ng-speed-test',
  templateUrl: './ng-speed-test.component.html',
  styleUrls: ['./ng-speed-test.component.css']
})
export class NgSpeedTestComponent implements OnInit {
  status$!: Observable<string>;
  speed: number = 0;
  private speedTestServiceSubscription!: Subscription;

  constructor(private speedTestService: SpeedTestService) { }

  ngOnInit(): void {
    this.speedTestServiceSubscription = this.speedTestService.getMbps(
      {
        iterations: 5,
        file: {
          path: 'https://raw.githubusercontent.com/jrquick17/ng-speed-test/02c59e4afde67c35a5ba74014b91d44b33c0b3fe/demo/src/assets/500kb.jpg',
          size: 3271592,
          shouldBustCache: true
        }
      }
    ).subscribe(speed => {
      this.speed = speed;
      console.log("ng-speed-test snelheid in mbps: " + speed);
    });

    this.status$ = this.speedTestService.isOnline().pipe(
      map(isOnline => {
        return isOnline ? "OFFLINE" : "ONLINE";
      })
    );
  }

  ngOnDestroy(): void {
    this.speedTestServiceSubscription.unsubscribe();
  }
}
