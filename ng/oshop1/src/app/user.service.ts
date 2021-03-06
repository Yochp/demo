import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {AuthService} from './auth.service';
import {FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import {AppUser} from './models/app-user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  db: AngularFireDatabase) {
  }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
        name: user.displayName,
        isAdmin: true,
        email: user.email
      }
    );
  }

  get(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/users/' + uid);

  }

}
