import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteData } from 'projects/ngx-perfect-layout/src/public-api';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { NoOptionsPageComponent } from './components/pages/no-options-page/no-options-page.component';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home", 
    component: HomePageComponent,
    data:{
      displayName: "Home",
      iconClass: "la-home"
    }as RouteData
  },
  {
    path: "no-options", 
    component: NoOptionsPageComponent,
    data:{
      displayName: "No options",
      iconClass: "la-broom"
    }as RouteData
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
