import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BooknowComponent } from './booknow/booknow.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, title: 'Home'},
  {path: 'aboutus', component: AboutusComponent, title: 'About us'},
  {path: 'book', component: BooknowComponent, title: 'Book Apointment'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
