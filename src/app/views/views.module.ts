import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -- SLICK COROUSEL CONFIG MODULE -- //
import { SlickCarouselModule } from 'ngx-slick-carousel';

// -- MODULES -- //
import { SharedModule } from '../shared/shared.module';
import { ViewsRoutingModule } from './views-routing.module';

// -- COMPONENTS -- //
import { HomeComponent } from './components/home/home.component';
import { GamesComponent } from './components/games/games.component';
import { GameNavbarComponent } from './components/games/game-navbar/game-navbar.component';
import { InstructionsComponent } from './components/games/instructions/instructions.component';
import { RoomComponent } from './components/games/room/room.component';
import { ChatComponent } from './components/games/chat/chat.component'


@NgModule({
  declarations: [
    HomeComponent,
    GamesComponent,
    GameNavbarComponent,
    InstructionsComponent,
    RoomComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewsRoutingModule,
    SlickCarouselModule
  ]
})
export class ViewsModule { }
