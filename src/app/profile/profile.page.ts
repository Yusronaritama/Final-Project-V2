import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage {

  constructor(private router: Router) {}

  changeAvatar() {
    // Logic for changing avatar
    console.log('Change avatar clicked');
  }

  logout() {
    // Logic for logging out
    console.log('Logout clicked');
    this.router.navigate(['/login']);
  }

}
