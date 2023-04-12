import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  searchQuestions(searchTerm: string) {
    return this.http.get(`${this.baseUrl}/questions?q=${searchTerm}`);
  }


}