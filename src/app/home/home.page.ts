import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor(private menuCtrl: MenuController) {}

  selectedImage: string | ArrayBuffer | null = null;
  selectedCarType: string = '';
  cars = [
    {
      brand: 'Toyota',
      status: 'Tersedia',
      name: 'Avanza',
      type: 'MPV',
      year: 2015,
      seats: 7,
      price: 350000,
      image: 'assets/image/tank.jpeg'
    },
    {
      brand: 'Toyota',
      status: 'Tersedia',
      name: 'Avanza',
      type: 'MPV',
      year: 2015,
      seats: 7,
      price: 350000,
      image: 'assets/image/tank.jpeg'
    }
  ];
  openSettings() {
    this.menuCtrl.enable(true, 'settingsMenu');
    this.menuCtrl.open('settingsMenu');
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        this.selectedImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  
}
      
