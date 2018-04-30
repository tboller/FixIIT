import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TicketService {

  constructor(private http: Http) { }

  getTickets(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('/tickets',{headers: headers})
      .map(res => res.json());
  }

  createTicket(ticket){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('/tickets',ticket,{headers: headers})
      .map(res => res.json());
  }
}
