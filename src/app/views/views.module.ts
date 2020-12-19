import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -- SLICK COROUSEL CONFIG MODULE -- //
import { SlickCarouselModule } from 'ngx-slick-carousel';

// -- COMPONENTS -- //
import { HomeComponent } from './components/home/home.component';
// import { GamesComponent } from './components/games/games.component';
// import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
// import { GameComponent } from './components/game/game.component';
// import { LobbyComponent } from './components/lobby/lobby.component';

// -- MODULES -- //
import { SharedModule } from '../shared/shared.module';
import { ViewsRoutingModule } from './views-routing.module'


@NgModule({
  declarations: [
    HomeComponent,
    // GamesComponent,
    // ContactComponent,
    AboutComponent,
    // GameComponent,
    // LobbyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewsRoutingModule,
    SlickCarouselModule
  ]
})
export class ViewsModule { }
