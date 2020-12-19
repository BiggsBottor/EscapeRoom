import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  toggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.toggle = !this.toggle;
  }

}
