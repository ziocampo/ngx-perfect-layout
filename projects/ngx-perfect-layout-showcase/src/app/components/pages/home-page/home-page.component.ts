import { Component, HostBinding, OnInit } from '@angular/core';
import { Theme } from 'projects/ngx-perfect-layout/src/public-api';
import { routes } from '../../../app-routing.module';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public routes = routes;
  public themes: Theme[] = [{
    displayName: "Blue tango",
    name: "blue-tango-theme"
  }, {
    displayName: "Coffee",
    name: "coffee-theme"
  }, {
    displayName: "Relax",
    name: "relax-theme"
  }];

constructor(
  ) { }

  ngOnInit(): void {
  }

}
