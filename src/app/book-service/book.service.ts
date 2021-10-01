import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Books } from '../books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private book = '';

  constructor(private _http: HttpClient) {
    console.log('Books Service Init...');
  }
  requestBook(Bookname: string) {
    return this._http.get(http
    );
  }
}
