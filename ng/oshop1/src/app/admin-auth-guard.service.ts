import {Injectable} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {AuthService} from './auth.service';
import 'rxjs/add/operator/map';
import {UserService} from './user.service';
import {Observable} from 'rxjs';
import {CanActivate} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userServices: UserService) {
  }


  canActivate(): Observable<boolean> {
    return this.auth.user$
      .switchMap(user => this.userServices.get(user.uid))
      .map(appUser => appUser.isAdmin);
  }

}


