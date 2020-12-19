import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';


const VIEWSROUTES: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(VIEWSROUTES) ],
})
export class ViewsRoutingModule { }
