import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NewHomeComponent } from './new-home/new-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/new-home', pathMatch: 'full' }, // Redirect to home
  { path: 'home', component: HomeComponent },
  { path: 'new-home', component: NewHomeComponent },
  { path: '**', component: ErrorPageComponent } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, 
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
