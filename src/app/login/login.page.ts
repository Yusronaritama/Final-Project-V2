import { Component, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  isSignup = false;

  birthDate: string = '';

  // Tambahkan tanda '!' untuk non-null assertion agar TypeScript tidak error
  @ViewChild('birthPicker', { static: false }) birthPicker!: IonDatetime;
  birthDateDisplay: string = '';

  toggleMode() {
    this.isSignup = !this.isSignup;
  }
  onDateChange(event: any) {
    this.birthDateDisplay = event.detail.value ? new Date(event.detail.value).toLocaleDateString('id-ID') : '';
    // Simpan tanggal lahir sesuai kebutuhan Anda
  }
}
