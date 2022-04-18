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

  public landscapeLayout: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public smallScreen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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

}
