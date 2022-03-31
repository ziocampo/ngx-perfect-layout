import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslateLoader, TranslateModule, TranslateParser, TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { NgxPerfectLayoutService } from './ngx-perfect-layout.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgxPerfectMainLayoutComponent } from './ngx-perfect-main-layout/ngx-perfect-main-layout.component';
import { NgxPerfectPageContentDirective } from './directives/ngx-perfect-page-content.directive';
import { NgxPerfectPageFooterDirective } from './directives/ngx-perfect-page-footer.directive';
import { NgxPerfectPageDrawerDirective } from './directives/ngx-perfect-page-drawer.directive';

class CustomTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    switch (lang) {
      case "it":
        return of({ ui: { theme: "tema" } });
    }
    return of({ ui: { theme: "theme" } });
  }
}

@NgModule({
  declarations: [
    NgxPerfectMainLayoutComponent,
    NgxPerfectPageContentDirective,
    NgxPerfectPageFooterDirective,
    NgxPerfectPageDrawerDirective
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    TranslateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
    CommonModule,
    RouterModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader
      }
    }),

  ],
  exports: [
    NgxPerfectMainLayoutComponent,
    NgxPerfectPageContentDirective,
    NgxPerfectPageFooterDirective,
    NgxPerfectPageDrawerDirective
  ],
  providers: [
    NgxPerfectLayoutService,
  ]
})
export class NgxPerfectLayoutModule { }

