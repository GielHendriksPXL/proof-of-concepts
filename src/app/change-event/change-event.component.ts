import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-event',
  templateUrl: './change-event.component.html',
  styleUrls: ['./change-event.component.css']
})
export class ChangeEventComponent implements OnInit {
  type!: string;

  constructor() {
    this.type = navigator.connection.type
  }

  ngOnInit(): void {
    navigator.connection.addEventListener('change', event => {
      console.log(navigator)
      console.log(navigator.connection.type);
      this.type = navigator.connection.type;
    });
  }

}
