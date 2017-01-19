import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router }          from '@angular/router';

declare var Auth0: any;

@Injectable()
export class AuthService {

auth0 = new Auth0({
  domain: 'mattf.eu.auth0.com',
  clientID: 'O33BqDv57D9VKAoU67QiGIs1wY3zVsMm',
  responseType: 'token',
  callbackURL: 'http://localhost:4200/issuances',
});

  constructor(private router: Router) {
    var result = this.auth0.parseHash(window.location.hash);

    if (result && result.idToken) {
      localStorage.setItem('id_token', result.idToken);
      this.router.navigate(['/home']);
    } else if (result && result.error) {
      alert('error: ' + result.error);
    }
  }


  public login(username, password) {
    this.auth0.login({
      connection: 'Username-Password-Authentication',
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
