import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

// Avoid name not found warnings
declare var auth0: any;

@Injectable()
export class AuthService {

  // Configure Auth0
  auth0 = new auth0.WebAuth({
    domain: 'mattf.eu.auth0.com',
    clientID: 'bkrYGMVjHyFMYabpiOMgYL7cM3Lf10SS',
    // specify your desired callback URL
    callbackURL: 'http://localhost:4200',
    responseType: 'token id_token'
  });

  constructor(private router: Router) {
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);

      } else if (authResult && authResult.error) {
        alert('Error: ' + authResult.error);
      }
    });
  }

  public login(username: string, password: string): void {
    this.auth0.client.login({
      realm: 'ast-app-db',
      username: username,
      password: password
    }, (err, authResult) => {
      if (err) {
        alert('Error: ' + err.description);
        return;
      }
      if (authResult && authResult.idToken && authResult.accessToken) {
        this.setUser(authResult);
        //this.router.navigate(['/']);
      }
    });
  }

  public signup(email, password): void {
    this.auth0.redirect.signupAndLogin({
      connection: 'Username-Password-Authentication',
      email,
      password,
    }, function(err) {
      if (err) {
        alert('Error: ' + err.description);
      }
    });
  }

  public loginWithGoogle(): void {
    this.auth0.authorize({
      connection: 'google-oauth2',
    });
  }

  public isAuthenticated(): boolean {
    // Check whether the id_token is expired or not
    return tokenNotExpired();
  }

  public logout(): void {
    // Remove token from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
  }

  private setUser(authResult): void {
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
  }
}