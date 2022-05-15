import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpleCrudLayoutComponent } from './ngx-simple-crud-layout.component';

describe('NgxSimpleCrudLayoutComponent', () => {
  let component: NgxSimpleCrudLayoutComponent;
  let fixture: ComponentFixture<NgxSimpleCrudLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSimpleCrudLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSimpleCrudLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
