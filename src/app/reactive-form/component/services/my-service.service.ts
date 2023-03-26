import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private apiURL = 'http://localhost:3000/employee';
  constructor(private http :HttpClient) { }


  getData(): Observable<any> {
    return this.http.get(this.apiURL);
  }

  getItem(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get(url);
  }

  addItem(item: any): Observable<any> {
    return this.http.post(this.apiURL, item);
  }

  deleteItem(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url);
  }

  updateItem(id: number, item: any): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.put(url, item);
  }
}
