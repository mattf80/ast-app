import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router }          from '@angular/router';

declare var Auth0: any;

@Injectable()
export class AuthService {

auth0 = new Auth0({
  domain: 'mattf.eu.auth0.com',
  clientID: 'bkrYGMVjHyFMYabpiOMgYL7cM3Lf10SS',
  responseType: 'token',
  callbackURL: 'http://localhost:4200'
});

  constructor(private router: Router) {
    var result = this.auth0.parseHash(window.location.hash);
    console.log(result);

    if (result && result.idToken) {
      localStorage.setItem('id_token', result.idToken);
      console.log(localStorage.getItem('id_token'));
      this.router.navigate(['/issuances']);
    } else if (result && result.error) {
      alert('error: ' + result.error);
    }
  }


  public login(username, password) {
    this.auth0.login({
      connection: 'ast-app-db',
      responseType: 'token',
      email: username,
      password: password,
    }, function(err) {
      if (err) alert("something went wrong: " + err.message);
    });
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  }
}