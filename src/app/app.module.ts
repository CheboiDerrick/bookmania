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
import { ClassicsComponent } from './classics/classics.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { HistoryComponent } from './history/history.component';
import { MysteryComponent } from './mystery/mystery.component';
import { ScienceFictionComponent } from './science-fiction/science-fiction.component';


@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    BooksviewComponent,
    HomepageComponent,
    ClassicsComponent,
    FantasyComponent,
    HistoryComponent,
    MysteryComponent,
    ScienceFictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
