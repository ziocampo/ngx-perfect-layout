import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPerfectLayoutModule } from 'projects/ngx-perfect-layout/src/public-api';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { NoOptionsPageComponent } from './components/pages/no-options-page/no-options-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NoOptionsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxPerfectLayoutModule,
    MatCardModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
