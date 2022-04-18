import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Routes, Route } from '@angular/router';
import { MenuItem } from '../../models/menu-item';
import { Theme } from '../../models/theme';
import { NgxPerfectLayoutService } from '../ngx-perfect-layout.service';
import {RouteData} from '../../models/route-data';
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

    const menu: MenuItem[] = [];
    
    for(const route of this.service.routes){

        if(route.data){

          const routeData = route.data as RouteData;

          if(routeData.groupName){
            let group = menu.find(o=>o.displayName == routeData.groupName);
            if(!group){
              group = {displayName: routeData.groupName, icon: 'la-folder', children:[]};
              menu.push(group);
            }
            group.children!.push({displayName: routeData.displayName, icon: routeData.iconClass, route: `/${route.path}`})
          }else if(routeData.displayName){
            menu.push({displayName: routeData.displayName, icon: routeData.iconClass, route: `/${route.path}`});
          }

        }

    }
    
    this.menu = menu;

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
