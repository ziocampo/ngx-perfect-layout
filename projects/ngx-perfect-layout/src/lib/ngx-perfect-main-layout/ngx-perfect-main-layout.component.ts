import { Component, Input, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { Theme } from '../../models/theme';
import { NgxPerfectLayoutService } from '../ngx-perfect-layout.service';

@Component({
  selector: 'ngx-perfect-main-layout',
  templateUrl: './ngx-perfect-main-layout.component.html',
  styleUrls: ['./ngx-perfect-main-layout.component.scss']
})
export class NgxPerfectMainLayoutComponent implements OnInit {

  public menu;

  @Input()
  public themes: Theme[] = [];

  public theme: Theme | undefined;

  @Input()
  public routes: Routes = [];

  @Input()
  public isWorking: boolean = false;
  
  constructor(
    public service: NgxPerfectLayoutService
  ) {

    this.menu = this.routes
      .filter(o => !!(o.data ? ["displayName"] : ""))
      .map(o => {
        return {
          route: `/${o.path}`,
          displayName: o.data ? o.data["displayName"] : "",
          icon: o.data ? o.data["icon"] : ""
        }
      })

  }

  ngOnInit(): void {
  }

}
