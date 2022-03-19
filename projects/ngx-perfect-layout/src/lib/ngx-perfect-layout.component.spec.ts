import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPerfectLayoutComponent } from './ngx-perfect-layout.component';

describe('NgxPerfectLayoutComponent', () => {
  let component: NgxPerfectLayoutComponent;
  let fixture: ComponentFixture<NgxPerfectLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPerfectLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPerfectLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
