import { NgModule } from '@angular/core';
import { MainLayoutComponent } from '../public-api';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslateLoader, TranslateModule, TranslateParser, TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { NgxPerfectLayoutService } from './ngx-perfect-layout.service';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatListModule} from '@angular/material/list'; 
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    TranslateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    MainLayoutComponent
  ],
  providers: [
    NgxPerfectLayoutService
  ]
})
export class NgxPerfectLayoutModule { }

class CustomTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of({ KEY: 'value' });
  }
}