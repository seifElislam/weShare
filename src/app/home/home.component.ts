import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { Todo } from '../types/item'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userProfile: any
  todos: Todo[]
  constructor(public auth: AuthService, private api: ApiService) {}

  ngOnInit() {
    this.auth.userProfile$.subscribe(data => {this.userProfile = data})
    this.getAllItems() 
    
  }

  getAllItems() {
    this.api.getItems$().subscribe(res => {this.todos = res['items']})
  }

}
