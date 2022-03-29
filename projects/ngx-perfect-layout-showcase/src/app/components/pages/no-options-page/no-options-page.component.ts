import { Component, OnInit } from '@angular/core';
import { routes } from '../../../app-routing.module';

@Component({
  selector: 'app-no-options-page',
  templateUrl: './no-options-page.component.html',
  styleUrls: ['./no-options-page.component.scss']
})
export class NoOptionsPageComponent implements OnInit {

  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
