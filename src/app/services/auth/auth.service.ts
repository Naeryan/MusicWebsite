import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Injectable()
export class AuthService {
	private user: Observable<firebase.User>;
	private userDetails: any;

  	constructor(private afAuth: AngularFireAuth) {
  		this.user = this.afAuth.authState;

  		this.user.subscribe( user => {
  			if (user) {
  				this.userDetails = user;
  				console.log(this.userDetails);
  			}
  			else {
  				this.userDetails = null;
  			}
  		});
  	}

  	facebookLogIn() {
  		this.afAuth.auth.signInWithPopup(new FacebookAuthProvider());
  	}

    googleLogIn() {
      this.afAuth.auth.signInWithPopup(new GoogleAuthProvider());
    }

  	logout() {
  		this.afAuth.auth.signOut();
  	}

  	isUserLoggedIn() {
  		if (this.userDetails) {
  			return true;
  		}
  		else {
  			return false;
  		}
  	}

  	getUser() {
  		return {
  			name: this.userDetails.displayName,
  			email: this.userDetails.email
  		};
  	}
}
