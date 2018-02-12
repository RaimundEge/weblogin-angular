import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  error : string;
  username: string;
  password: string;

  constructor(public data: DataService, private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    console.log("login submitted: " + this.username + "," + this.password);
    var response = this.data.getUser(this.username);
    response.subscribe(data => {
      console.log(data);
      if (data['message']) {
        this.error = "Username/password invalid";
      } else {
        console.log("user found: " + data['fullname']);
        this.data.setMessage(data['fullname'] + ": Welcome back !");
        this.data.user = data['fullname'];
        this.router.navigate(['content']);
      }   
    }
    );
  }
}
