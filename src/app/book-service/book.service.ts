import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  private basePath = 'http://127.0.0.1:5000/books' 

  constructor(private http: HttpClient) { }

  public addBook(book:any): Observable<any> {
    return this.http.post(this.basePath,book)

  }
}
