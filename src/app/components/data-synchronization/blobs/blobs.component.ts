import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blobs',
  templateUrl: './blobs.component.html',
  styleUrls: ['./blobs.component.css']
})
export class BlobsComponent implements OnInit {
  size: number = 0;
  url!: string;

  constructor() { }

  ngOnInit(): void {
    let xhr = new XMLHttpRequest(), blob;

    xhr.open("GET", "assets/test.jpg", true);
    xhr.responseType = "blob";

    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        blob = xhr.response;
        this.size = blob.size;
        this.url = URL.createObjectURL(blob);
      }
    }, false);

    xhr.send();
  }
}
