import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../book-service/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  public bookForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private service: BookService) { }

  ngOnInit(): void {
    this.init();
  }
  public saveBook(): void{
   this.service.addBook(this.bookForm.value).subscribe(result => {});

  }

  private init(): void{
    this.bookForm = this.formBuilder.group({
      title:[]
    });

  }

}
