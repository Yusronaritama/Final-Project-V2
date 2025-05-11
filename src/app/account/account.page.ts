import { Component, OnInit, output } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  outputtext : any;

  constructor() { }
  ngOnInit() {
    this.outputtext =localStorage.getItem('name');
    console.log('result ==>' + this.outputtext);
  }
  

}
