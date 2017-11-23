import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() active: string;

  constructor() { }

  ngOnInit() {
  }

  setActive(active: string): void {
    this.active = active;
  }

  getActive(): string {
    return this.active;
  }
}
