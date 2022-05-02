import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../_services/users.service';
import { AlertifyService } from '../_services/alertify.service';
import { User } from '../_models/user';
import { Paginated, Pagination } from '../_models/pagination';
import { AuthService } from '../_services/auth.service';
import { Genders } from '../_shared/types/genders';


@Component({
  selector: 'app-authenticatelogin',
  templateUrl: './authenticatelogin.component.html',
  styleUrls: ['./authenticatelogin.component.css']
})
export class AuthenticateloginComponent implements OnInit {

  user: User;


  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // get data before activating the route. It can be used to avoid using safe navigators "?" in html page
    this.route.data.subscribe(data => {

    });
    this.user = this.authService.currentUser;
  }







}
