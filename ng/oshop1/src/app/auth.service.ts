import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;


  constructor(public auth: AngularFireAuth) {
    this.user$ = auth.authState;
  }

  login() {
      this.auth.auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider());
    }


  logOut() {
    this.auth.auth.signOut();
  }
}
