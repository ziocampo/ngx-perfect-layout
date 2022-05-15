import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Theme } from '../models/theme';
import { Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NgxPerfectLayoutService {

  /** The title of the page. If provided the page will display an H1 tag with the title. */
  public title: string | undefined;

  /**  */
  public themes: Theme[] = [];

  public theme: string | undefined;

  public routes: Routes = [];

  public showWaitingAnimation: boolean = false;
  public loginMode: boolean = true;
  public useBackgroundAnimation: boolean = false;
  public hamburgerMenuButtonPosition: "left" | "right" = "left";
  public menuMinWidth: string = "260px";

  public landscapeLayout: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public smallScreen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private _storagePrefix = "@NgxPerfectLayout";

  constructor(
    private _breakpointObserver: BreakpointObserver
  ) {

    _breakpointObserver
      .observe([
        Breakpoints.HandsetLandscape,
        Breakpoints.TabletLandscape,
        Breakpoints.WebLandscape,
      ])
      .subscribe((result) => {
        this.landscapeLayout.next(result.matches);
      });

    _breakpointObserver
      .observe([
        Breakpoints.Small,
        Breakpoints.XSmall
      ])
      .subscribe((result) => {
        this.smallScreen.next(result.matches);
      });

  }

  public getLocalValue<T>(key: string, valueIfEmpty?: any): T
  {
    const v = localStorage.getItem(`${this._storagePrefix}.${key}`);
    if (v)
    {
      return JSON.parse(v) as T || valueIfEmpty;
    }
    else
    {
      return valueIfEmpty;
    }
  }
  public setLocalValue<T>(key: string, v: T)
  {
    localStorage.setItem(`${this._storagePrefix}.${key}`, JSON.stringify(v));
  }

  public getSessionValue<T>(key: string, valueIfEmpty?: any): T
  {
    const v = sessionStorage.getItem(`${this._storagePrefix}.${key}`);
    if (v)
    {
      return JSON.parse(v) as T || valueIfEmpty;
    }
    else
    {
      return valueIfEmpty;
    }
  }
  public setSessionValue<T>(key: string, v: T)
  {
    sessionStorage.setItem(`${this._storagePrefix}.${key}`, JSON.stringify(v));
  }

}
