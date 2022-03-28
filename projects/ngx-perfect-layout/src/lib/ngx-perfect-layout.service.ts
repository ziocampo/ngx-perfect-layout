import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Injectable({
  providedIn: 'root'
})
export class NgxPerfectLayoutService {

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
