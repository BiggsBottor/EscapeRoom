import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [ FooterComponent, PathNotFoundComponent, NavbarComponent],
  exports: [  FooterComponent, NavbarComponent ],
  imports: [ CommonModule, RouterModule ]
})
export class SharedModule { }
