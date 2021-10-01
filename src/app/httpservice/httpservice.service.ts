import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

    private basepath = 'http://127.0.0.1:5000/books'

    constructor(private http: HttpClient) { }
    
    public post(url: any, data: any, head: any): any {
      return this.http.post(url, data, head);
    }
    
}
