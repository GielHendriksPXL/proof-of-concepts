import { Component, OnInit } from '@angular/core';
import { SpeedTestService } from 'ng-speed-test';

@Component({
  selector: 'app-ng-speed-test',
  templateUrl: './ng-speed-test.component.html',
  styleUrls: ['./ng-speed-test.component.css']
})
export class NgSpeedTestComponent implements OnInit {
  status: string = "ONLINE";
  speed: number = 0;

  constructor(private speedTestService: SpeedTestService) { }

  ngOnInit(): void {
    this.speedTestService.getMbps(
      {
        iterations: 5,
        file: {
          path: 'https://raw.githubusercontent.com/jrquick17/ng-speed-test/02c59e4afde67c35a5ba74014b91d44b33c0b3fe/demo/src/assets/500kb.jpg',
          size: 3271592,
          shouldBustCache: true
        }
      }
    ).subscribe(async (speed) => {
      this.speed = speed;
      console.log("ng-speed-test snelheid in mbps: " + speed);
    });

    this.speedTestService.isOnline().subscribe(isOnline => {
      if (isOnline) {
        this.status = "ONLINE";
      } else if (!isOnline) {
        this.status = "OFFLINE";
      }
      console.log("ng-speed-test isOnline: " + isOnline);
    });
  }

}
