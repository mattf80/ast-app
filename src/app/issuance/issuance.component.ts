import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issuance',
  template: `
    <h4>Issuance Component</h4>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./issuance.component.css']
})
export class IssuanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
