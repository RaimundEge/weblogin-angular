import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {

  URL = "//blitz.cs.niu.edu/UserRest/api/users/";
  secret = btoa("admin:secret");
  bag = { msg: '' };
  user: string = '';

  constructor(private http: HttpClient) { }

  setMessage = (m) => { this.bag.msg = m };
  getMessage = () => {
    var oldMsg = this.bag.msg;
    this.bag.msg = "";
    return oldMsg;
  };

  getUser(name: string) {
    var headers = new HttpHeaders().set('Authorization', "Basic " + this.secret);
    console.log("getting user: " + name);
    return this.http.get(this.URL + name, { headers: headers });
  }

  registerUser(fullname, username, password) {
    var headers = new HttpHeaders().set('Authorization', "Basic " + this.secret);
    headers.append('Content-Type', 'application/json');
    var body = { fullname: fullname, username: username, password: password };
    console.log("register user: " + fullname);
    return this.http.post(this.URL, body, { headers: headers });
  }
}