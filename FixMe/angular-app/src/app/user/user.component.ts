import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {TicketService} from '../ticket.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  tickets:any;

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,private ticketService: TicketService) { }

  ngOnInit() {
    this.getTickets();
  }

  getTickets(): void {
    this.ticketService.getTickets()
    .subscribe(tickets => this.tickets = tickets);
  }
  likeTicket(ticket){
    this.ticketService.likeTicket(ticket)
    .subscribe(ticket => {
      if(ticket.success){
        this.router.navigate(['user']);
      }else{
        this.router.navigate(['user']);
      }
    });
  }
}
