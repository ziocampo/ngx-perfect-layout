import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPerfectLayoutModule, NgxPerfectLayoutService } from 'projects/ngx-perfect-layout/src/public-api';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { NoOptionsPageComponent } from './components/pages/no-options-page/no-options-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NoOptionsPageComponent,
    LoginPageComponent,
    MainLayoutComponent
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
