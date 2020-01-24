import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  responseJson: string;
  constructor(public auth: AuthService, private api: ApiService) { }

  ngOnInit() {
    console.log(this.auth.userProfile$)
    this.pingApi()
  }

  pingApi() {
    this.api.ping$().subscribe(
      games => {
        console.log(games)
      },
      error =>  console.log(error)
  );
  }
    
}
