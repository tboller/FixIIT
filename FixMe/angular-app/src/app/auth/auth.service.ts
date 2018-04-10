import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from "./user.model";

@Injectable()
export class AuthService {
    authToken: any;
    user: any;
    
    constructor(private http: Http) {}

    register(user: User) {
        
    }

}