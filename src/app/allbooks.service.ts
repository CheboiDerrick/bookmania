import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllbooksService {

  constructor(private _http: HttpClient) {
    console.log('Github Service Init...');
  }

  getAllBooks() {
    return this._http.get('http://127.0.0.1:5000/books')
}

}
