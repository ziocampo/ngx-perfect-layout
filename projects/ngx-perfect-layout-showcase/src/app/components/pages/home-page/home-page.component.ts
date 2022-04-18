import { Component, HostBinding, OnInit } from '@angular/core';
import { NgxPerfectLayoutService } from 'projects/ngx-perfect-layout/src/lib/ngx-perfect-layout.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


constructor(
  public layoutService: NgxPerfectLayoutService
  ) { }

  ngOnInit(): void {
  }

}
