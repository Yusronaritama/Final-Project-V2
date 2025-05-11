import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';  

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }
  async initializeApp() {
    // Tambahkan delay jika ingin lebih lama
    await new Promise(resolve => setTimeout(resolve, 3000));
    await SplashScreen.hide();
  } 

}
