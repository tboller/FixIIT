import { Component, OnInit } from "@angular/core";
import { User } from '../auth/user.model';
import {ValidateService} from '../services/validate.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../auth/auth.service'
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    fname: string;
    lname: string;
    name: String;
    username: String;
    email: String;
    password: String;

  constructor(
            private validateService: ValidateService, 
            private flashMessage:FlashMessagesService,
            private authService: AuthService,
            private router: Router
          ) { }

    ngOnInit() {
    } 

    onRegisterSubmit(){
      this.name = this.fname.concat(" " + this.lname);
        const user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
          }

              // Required Fields
    if(!this.validateService.validateRegister(user)){
        this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
        return false;
      }
  
      // Validate Email
      if(!this.validateService.validateEmail(user.email)){
        this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
        return false;
      }

      // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        setTimeout(() => {
         this.router.navigate(['/login']);
         }
         , 4000);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        setTimeout(() => {
           this.router.navigate(['/register']);
         }
         , 4000);
      }
    });
    }
}
