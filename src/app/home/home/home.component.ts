import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from 'src/app/user.model';
import { AuthenticationService } from 'src/app/authentication.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  userFromApi: User;
  constructor(private Auth$: AuthenticationService, private Profile$: UserService) {
    this.currentUser = this.Auth$.currentUserValue;
   }

  ngOnInit(): void {
    this.Profile$.getById().pipe(first()).subscribe(user => { 
      this.userFromApi = user;
  });
  }

}
