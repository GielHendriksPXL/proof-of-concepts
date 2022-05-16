import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceWorkersService } from 'src/app/services/service-workers.service';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.css']
})
export class LocalstorageComponent implements OnInit {
  private serviceWorkersSubscription!: Subscription;
  randomJoke!: string | null;

  constructor(private serviceWorkersService: ServiceWorkersService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.serviceWorkersSubscription.unsubscribe();
  }

  onClick(): void {
    this.serviceWorkersSubscription = this.serviceWorkersService.getRandomJoke().subscribe((response) => {
      // window.localStorage.setItem('response', JSON.stringify(response));
      window.localStorage.setItem('responseValue', response.value)
      this.randomJoke = localStorage.getItem('responseValue');
    });
  }
}
