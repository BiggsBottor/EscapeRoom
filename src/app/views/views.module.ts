import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { GamesComponent } from './components/games/games.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { GameComponent } from './components/game/game.component';
import { LobbyComponent } from './components/lobby/lobby.component';



@NgModule({
  declarations: [HomeComponent, GamesComponent, LoginComponent, RegisterComponent, ContactComponent, AboutComponent, GameComponent, LobbyComponent],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
