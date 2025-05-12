import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  name = '';
  no_hp = '';
  alamat = '';
  tanggal_lahir: string = '';
  birthDateDisplay: string = '';
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  onDateChange(event: any) {
    this.birthDateDisplay = event.detail.value
      ? new Date(event.detail.value).toLocaleDateString('id-ID')
      : '';
    this.tanggal_lahir = event.detail.value;
  }

  register() {
    this.http.post('http://localhost:8000/api/register', {
      name: this.name,
      no_hp: this.no_hp,
      alamat: this.alamat,
      tanggal_lahir: this.tanggal_lahir,
      email: this.email,
      password: this.password,
    }).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/home']);
    }, err => {
      alert('Gagal daftar: ' + JSON.stringify(err.error));
    });
  }
}
