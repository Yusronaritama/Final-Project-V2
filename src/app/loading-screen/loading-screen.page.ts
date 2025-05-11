import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.page.html',
  styleUrls: ['./loading-screen.page.scss'],
})
export class LoadingScreenPage implements OnInit {

  constructor(
    private router : Router
  ){}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/login', { replaceUrl: true });
    }, 3000); // waktu loading screen
  }

}
