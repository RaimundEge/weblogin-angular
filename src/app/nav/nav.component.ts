import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public data: DataService, private router: Router) {  }

  ngOnInit() {
  }

  logout() {
    this.data.user = '';
    this.data.setMessage('You have been logged out');
    this.router.navigate(['home']);
  }
}
