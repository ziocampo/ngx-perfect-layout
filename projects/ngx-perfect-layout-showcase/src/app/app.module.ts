import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPerfectLayoutModule, NgxPerfectLayoutService } from 'projects/ngx-perfect-layout/src/public-api';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoOptionsPageComponent } from './components/pages/no-options-page/no-options-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NoOptionsPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxPerfectLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule
  ],
  providers: [
    NgxPerfectLayoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
