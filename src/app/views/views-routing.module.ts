import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GamesComponent } from './components/games/games.component';
import { InstructionsComponent } from './components/games/instructions/instructions.component';
import { RoomComponent } from './components/games/room/room.component';


const VIEWSROUTES: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'games', component: GamesComponent, data: { title: 'Juegos' },
    children: [
      { path: 'instructions', component: InstructionsComponent, data: { title: 'Instrucciones' } },
      { path: 'room', component: RoomComponent, data: { title: 'Sala' } },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(VIEWSROUTES) ],
})
export class ViewsRoutingModule { }
