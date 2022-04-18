import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteData } from 'projects/ngx-perfect-layout/src/public-api';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
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
  },
  {
    path: "child1", 
    component: NoOptionsPageComponent,
    data:{
      displayName: "Child 1",
      iconClass: "la-broom",
      groupName:"With children"
    }as RouteData
  },
  {
    path: "child2", 
    component: NoOptionsPageComponent,
    data:{
      displayName: "No options",
      iconClass: "la-stream",
      groupName: "With children"
    }as RouteData
  },
  {
    path: "login", 
    component: LoginPageComponent,
    data:{
      displayName: "Login",
      iconClass: "la-sign-in-alt"
    }as RouteData
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
