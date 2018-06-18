import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable, observable} from 'rxjs';
import {ActivatedRoute, CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;


  constructor(public auth: AngularFireAuth, private route: ActivatedRoute)  {
    this.user$ = auth.authState;
  }

  login() {

    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

      this.auth.auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider());

    }


  logOut() {
    this.auth.auth.signOut();
  }
}
