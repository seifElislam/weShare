import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) { }
  userProfile: any
  ngOnInit() {
    this.auth.userProfile$.subscribe(data => {this.userProfile = data})
  }

}