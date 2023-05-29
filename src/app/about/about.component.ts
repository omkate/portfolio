import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  enable = 0;
  readMore() {
    this.enable = 1;
  }
  closeReadMore() {
    this.enable = 0;
  }
}
