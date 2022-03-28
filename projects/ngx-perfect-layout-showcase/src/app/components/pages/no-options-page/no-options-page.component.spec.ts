import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOptionsPageComponent } from './no-options-page.component';

describe('NoOptionsPageComponent', () => {
  let component: NoOptionsPageComponent;
  let fixture: ComponentFixture<NoOptionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoOptionsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoOptionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
