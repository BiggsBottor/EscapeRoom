import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

// -- ROUTES -- //
import { AppRoutingModule } from './app-routing.module';

// -- COMPONENTS -- //
import { AppComponent } from './app.component';
import { LoginComponent } from './views/components/login/login.component';
import { ViewComponent } from './views/components/view/view.component';

// -- MODULES -- //
import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    ViewsModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
