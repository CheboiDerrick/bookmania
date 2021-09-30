import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksviewComponent } from './booksview/booksview.component';
import { ClassicsComponent } from './classics/classics.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { HistoryComponent } from './history/history.component';
import { MysteryComponent } from './mystery/mystery.component';
import { ScienceFictionComponent } from './science-fiction/science-fiction.component';

const routes: Routes = [

  { path: 'classics', component: ClassicsComponent },
  { path: 'fantasy', component: FantasyComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'romance', component: BooksviewComponent },
  { path: 'mystery', component: MysteryComponent },
  { path: 'scify', component: ScienceFictionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
