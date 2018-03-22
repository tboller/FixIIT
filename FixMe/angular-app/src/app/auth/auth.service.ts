import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { User } from "./user.model";

@Injectable()
export class AuthService {
    constructor(private http: Http) {}

    register(user: User) {
        
    }

}