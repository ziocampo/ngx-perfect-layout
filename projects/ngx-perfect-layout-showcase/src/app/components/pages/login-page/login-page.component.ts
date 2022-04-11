import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPerfectLayoutService } from 'projects/ngx-perfect-layout/src/lib/ngx-perfect-layout.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private _layoutService: NgxPerfectLayoutService,
    private _router : Router
  ) { 
  }

  ngOnInit(): void {
    this._layoutService.loginMode = true;
  }

  public onLoginButtonClick(){
    this._layoutService.loginMode = false;
    this._router.navigateByUrl("/home");
  }

}
