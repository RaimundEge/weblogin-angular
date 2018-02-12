import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public data: DataService, private router: Router) {  }

  ngOnInit() {
  }

  logout() {
    this.data.user = '';
    this.data.setMessage('You have been logged out');
    this.router.navigate(['home']);
  }
}
