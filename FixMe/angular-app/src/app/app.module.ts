import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TermsComponent } from './terms/terms.component';
import { ContactComponent } from './contact/contact.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { ProfileComponent } from './profile/profile.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './auth/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { TicketService } from './ticket.service';
import { CreateComponent } from './create/create.component';


const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent, canActivate:[AuthGuard]},
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard]},
  { path: 'terms', component: TermsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    AdminComponent,
    HomeComponent,
    TermsComponent,
    ContactComponent,
    SitemapComponent,
    ProfileComponent,
    TicketComponent,
    CreateComponent
  ],
  imports: [
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true }
		),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),

  ],
  providers: [ValidateService, AuthService, AuthGuard, TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
