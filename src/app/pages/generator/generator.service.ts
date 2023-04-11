import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class GeneratorService {

  private readonly endpoint = 'https://meowfacts.herokuapp.com'

  constructor(private http: HttpClient) { }

  getCatFact() {
    return this.http.get<{ data: Array<String> }>(this.endpoint);
  }

}
