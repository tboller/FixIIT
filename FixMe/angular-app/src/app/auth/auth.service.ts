import { Injectable } from "@angular/core";
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

import { User } from "./user.model";

@Injectable()
export class AuthService {
    authToken: any;
    user: any;
    
    constructor(private http: Http) {}

   // register(user: User) {        
   // }

    registerUser(user){
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('/users/register', user,{headers: headers})
          .map(res => res.json());
      }

      //makes sure the user is who they say they are
    authenticateUser(user){
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('/users/login', user,{headers: headers})
          .map(res => res.json());
    }

    //saves the token to local storage
    storeUserData(token, user) {
      localStorage.setItem('id_token', token);
      localStorage.setItem('user', JSON.stringify(user));
      this.authToken = token;
      this.user = user;
    }

      //pulls profile information
      getProfile() {
        let headers = new Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/profile',{headers: headers})
          .map(res => res.json());
      }

      //fetches token from local storage
      loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
      }

      loggedIn() {
        return tokenNotExpired('id_token');
      }
      
      
      //removes session info
      logout(){
        this.authToken = null;
        this.user = null;
        localStorage.clear();
      }

}