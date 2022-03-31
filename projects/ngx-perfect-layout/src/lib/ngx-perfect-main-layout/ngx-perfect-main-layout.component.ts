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

  /** The title of the page. If provided the page will display an H1 tag with the title. */
  @Input()
  public title: string | undefined;

  /**  */
  @Input()
  public themes: Theme[] = [];

  @Input()
  public theme: string | undefined;

  @Input()
  public routes: Routes = [];

  public menu: MenuItem[] = [];

  @Input()
  public showWaitingAnimation: boolean = false;

  @Input()
  public useBackgroundAnimation: boolean = false;

  constructor(
    private _overlayContainer: OverlayContainer,
    public service: NgxPerfectLayoutService
  ) {

  }

  ngOnInit(): void {

    this.menu = this.routes
      .filter(o => !!(o.data ? ["displayName"] : ""))
      .map(o => {
        return {
          route: `/${o.path}`,
          displayName: o.data ? o.data["displayName"] : "",
          icon: o.data ? o.data["iconClass"] : ""
        }
      })

    if (this.themes && this.themes.length) {
      this.theme = this.themes[0].name;
      this._overlayContainer.getContainerElement().classList.add(this.theme);
    }

  }


  public onThemeSelectionChange(event: MatSelectChange) {
    if (this.theme) {
      this._overlayContainer.getContainerElement().classList.add(this.theme);
    }
  }

}
