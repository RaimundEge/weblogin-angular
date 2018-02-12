import { Injectable }   from '@angular/core';
import { CanActivate, Router }  from '@angular/router';
import { DataService } from '../data.service/data.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public data: DataService, private router: Router) { }

  canActivate() {
    console.log('AuthGuard#canActivate called');
    if (this.data.user == '') {
      this.router.navigate(['home']);
    } else {
         return true;
    }
  }
}
