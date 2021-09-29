import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { BookDetailsComponent } from './book-details/book-details.component';
=======
import { NavbarComponent } from './navbar/navbar.component';
>>>>>>> 368ceee72eea9a1d0bd386ea2a076666b56cce19

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    BookDetailsComponent
=======
    NavbarComponent
>>>>>>> 368ceee72eea9a1d0bd386ea2a076666b56cce19
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
