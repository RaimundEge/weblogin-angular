import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string = '';
  fullname: string;
  username: string;
  password: string;

  constructor(public data: DataService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("register submitted: " + this.username + "," + this.password);
    var response = this.data.getUser(this.username);
    response.subscribe(data => {
      console.log(data);
      if (data['username']) {
        this.error = "Username is not available";
      } else {
        console.log("lets register new user: " + this.fullname);
        this.data.registerUser(this.fullname, this.username, this.password).subscribe(obj => {
          console.log(obj);
          this.data.setMessage('New user registered: ' + this.fullname);
          this.router.navigate(['content']);
        });
      }   
    }
    );
  }
}
