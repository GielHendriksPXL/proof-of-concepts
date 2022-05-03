import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-event',
  templateUrl: './change-event.component.html',
  styleUrls: ['./change-event.component.css']
})
export class ChangeEventComponent implements OnInit {
  status: string = "ONLINE";

  constructor() {
  }

  ngOnInit(): void {
    navigator.connection.addEventListener('change', () => {
      if (window.navigator.onLine) {
        this.status = "ONLINE";
      } else if (!window.navigator.onLine) {
        this.status = "OFFLINE";
      }
      console.log("Change event: " + window.navigator.onLine);
    });
  }

}
