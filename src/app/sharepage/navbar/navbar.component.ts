import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private auth: AuthService, private http: HttpClient, private api: ApiService, private router: Router) {}

  ngOnInit(): void {}

  loggedin() {
    return localStorage.getItem('token');
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
