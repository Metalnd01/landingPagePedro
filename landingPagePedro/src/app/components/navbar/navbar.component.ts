import { Component, OnInit } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ServicesComponent } from '../services/services.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
