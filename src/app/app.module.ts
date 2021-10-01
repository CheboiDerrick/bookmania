import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookDetailsComponent } from './book-details/book-details.component';

import { NavbarComponent } from './navbar/navbar.component';


import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { BooksviewComponent } from './booksview/booksview.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    BooksviewComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
