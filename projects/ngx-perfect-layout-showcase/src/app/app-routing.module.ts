import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteData } from 'projects/ngx-perfect-layout/src/public-api';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home", 
    component: HomePageComponent,
    data:{
      
    }as RouteData
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
