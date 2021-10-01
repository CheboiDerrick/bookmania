import { Component, OnInit } from '@angular/core';
import { AllbooksService } from '../allbooks.service';
import { Book } from '../book';

@Component({
  selector: 'app-booksview',
  templateUrl: './booksview.component.html',
  styleUrls: ['./booksview.component.css']
})
export class BooksviewComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
