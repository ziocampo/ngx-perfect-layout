import { Component } from '@angular/core';
import { NgxPerfectLayoutService } from 'projects/ngx-perfect-layout/src/public-api';
import { routes } from './app-routing.module';
import { Theme } from 'projects/ngx-perfect-layout/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ngx-perfect-layout-showcase';

  constructor(
    private _layoutService: NgxPerfectLayoutService
  ) { }

  ngOnInit(): void {

    this._layoutService.routes = routes;

    this._layoutService.themes = [{
      displayName: "Blue tango",
      name: "blue-tango-theme"
    }, {
      displayName: "Coffee",
      name: "coffee-theme"
    }, {
      displayName: "Relax",
      name: "relax-theme"
    }];

    this._layoutService.useBackgroundAnimation = false;
    this._layoutService.showWaitingAnimation = false;
    this._layoutService.loginMode=false;
    this._layoutService.title = "Title!";

  }

}
