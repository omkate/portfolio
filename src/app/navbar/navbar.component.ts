import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  home() {
    this.router.navigate(['/home']);
  }
  about() {
    this.router.navigate(['/about']);
  }
  skills() {
    this.router.navigate(['/skills']);
  }
  projects() {
    this.router.navigate(['/projects']);
  }
}
