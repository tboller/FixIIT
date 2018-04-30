import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import { Router } from '@angular/router';
import {TicketService} from '../ticket.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title: String;
  description: String;

  constructor(private authService:AuthService, private router:Router, private ticketService:TicketService,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  onCreateSubmit(){
    let ticket = {
      title: this.title,
      description: this.description
    }
    this.ticketService.createTicket(ticket).subscribe(ticket => {
      if(ticket.success){
        this.router.navigate(['/user']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }

}
