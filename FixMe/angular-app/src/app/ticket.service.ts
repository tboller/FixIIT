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

  createTicket(ticket){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/tickets/',ticket,{headers: headers})
      .map(res => res.json());
  }
  likeTicket(ticket){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/tickets/like',ticket,{headers: headers})
      .map(res => res.json());
  }
  dislikeTicket(ticket){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/tickets/dislike',ticket,{headers: headers})
      .map(res => res.json());
  }
}
