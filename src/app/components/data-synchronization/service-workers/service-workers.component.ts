import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceWorkersService } from 'src/app/services/service-workers.service';

@Component({
  selector: 'app-service-workers',
  templateUrl: './service-workers.component.html',
  styleUrls: ['./service-workers.component.css']
})
export class ServiceWorkersComponent implements OnInit {
  private serviceWorkersSubscription!: Subscription;
  randomJoke!: string;

  constructor(private serviceWorkersService: ServiceWorkersService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.serviceWorkersSubscription.unsubscribe();
  }

  onClick(): void {
    this.serviceWorkersSubscription = this.serviceWorkersService.getRandomJoke().subscribe((response) => {
      this.randomJoke = response.value;
    })
  }
}
