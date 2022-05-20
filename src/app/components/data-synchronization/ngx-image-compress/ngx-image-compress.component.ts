import { Component, OnInit } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-ngx-image-compress',
  templateUrl: './ngx-image-compress.component.html',
  styleUrls: ['./ngx-image-compress.component.css']
})
export class NgxImageCompressComponent implements OnInit {
  imgSizeBeforeCompression: number = 0;
  imgSizeAfterCompression: number = 0;

  constructor(private imageCompress: NgxImageCompressService) { }

  ngOnInit(): void {
  }

  compressFile() {
    this.imageCompress.uploadFile().then(
      ({ image, orientation }) => {
        this.imgSizeBeforeCompression = this.imageCompress.byteCount(image);

        this.imageCompress
          .compressFile(image, orientation, 50, 50)
          .then(
            (compressedImage) => {
              this.imgSizeAfterCompression = this.imageCompress.byteCount(compressedImage);
            }
          );
      }
    );
  }
}