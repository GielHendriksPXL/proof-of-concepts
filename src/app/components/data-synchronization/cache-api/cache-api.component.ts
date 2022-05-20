import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cache-api',
  templateUrl: './cache-api.component.html',
  styleUrls: ['./cache-api.component.css']
})
export class CacheApiComponent implements OnInit {
  responses!: string[];
  private cache!: Cache;
  private requests: Request[] = [];
  private jokeRequest: Request = new Request('https://api.chucknorris.io/jokes/random');
  private categoryRequest: Request = new Request('https://api.chucknorris.io/jokes/categories');
  private jokeCategoryRequest: Request = new Request('https://api.chucknorris.io/jokes/random?category=food');
  private queryRequest: Request = new Request('https://api.chucknorris.io/jokes/search?query=cars');

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.initRequests();

    this.cache = await caches.open('jokes');
  }

  initRequests(): void {
    this.requests = [];
    this.requests.push(this.jokeRequest, this.categoryRequest, this.jokeCategoryRequest, this.queryRequest);
  }

  async addRequest(): Promise<void> {
    this.initRequests();
    await this.cache.addAll([this.jokeRequest, this.categoryRequest, this.jokeCategoryRequest, this.queryRequest]);
  }

  async getResponse(): Promise<void> {
    this.responses = [];
    this.requests.forEach(async (request) => {
      let responseMatch = await this.cache.match(request);
      let formattedResponse = JSON.parse(new TextDecoder().decode((await responseMatch?.body?.getReader().read())?.value));
      if (request.url === "https://api.chucknorris.io/jokes/random" || request.url === "https://api.chucknorris.io/jokes/random?category=food") {
        this.responses.push(formattedResponse.value);
      } else if (request.url === "https://api.chucknorris.io/jokes/categories") {
        let formattedOutput = "";
        formattedResponse.forEach((category: any) => {
          formattedOutput += category + ", ";
        });
        this.responses.push(formattedOutput);
      } else if (request.url === "https://api.chucknorris.io/jokes/search?query=cars") {
        let formattedOutput = "";
        formattedResponse.result.forEach((result: any) => {
          formattedOutput += result.value + "\n";
        });
        this.responses.push(formattedOutput);
      }
    });
  }

  async delete(): Promise<void> {
    let index = this.requests.indexOf(this.queryRequest);
    if (index !== -1) {
      this.requests.splice(index);
      await this.cache.delete(this.queryRequest);
    }
  }
}
