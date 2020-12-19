import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/components/login/login.component';
import { PathNotFoundComponent } from './shared/components/path-not-found/path-not-found.component';
import { ViewComponent } from './views/components/view/view.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: ViewComponent,
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
  },
  // { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: '**', component: PathNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
