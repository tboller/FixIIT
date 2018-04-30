import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TicketService {
  
  constructor(private http: Http) { }

  getTickets(){
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.get('http://localhost:3000/tickets/',{headers: headers})
        .map(res => res.json());
    }

}
