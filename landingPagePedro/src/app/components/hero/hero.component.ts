import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
