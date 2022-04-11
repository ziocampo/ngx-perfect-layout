import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Routes } from '@angular/router';
import { MenuItem } from '../../models/menu-item';
import { Theme } from '../../models/theme';
import { NgxPerfectLayoutService } from '../ngx-perfect-layout.service';

@Component({
  selector: 'ngx-perfect-main-layout',
  templateUrl: './ngx-perfect-main-layout.component.html',
  styleUrls: ['./ngx-perfect-main-layout.component.scss']
})
export class NgxPerfectMainLayoutComponent implements OnInit {

  public menu: MenuItem[] = [];

  constructor(
    private _overlayContainer: OverlayContainer,
    public service: NgxPerfectLayoutService
  ) {

  }

  ngOnInit(): void {

    this.menu = this.service.routes
      .filter(o => !!(o.data ? o.data["displayName"] : ""))
      .map(o => {
        return {
          route: `/${o.path}`,
          displayName: o.data ? o.data["displayName"] : "",
          icon: o.data ? o.data["iconClass"] : ""
        }
      })

    if (this.service.themes && this.service.themes.length) {
      this.service.theme = this.service.themes[0].name;
      this._overlayContainer.getContainerElement().classList.add(this.service.theme);
    }

  }


  public onThemeSelectionChange(event: MatSelectChange) {
    if (this.service.theme) {
      this._overlayContainer.getContainerElement().classList.add(this.service.theme);
    }
  }

}
