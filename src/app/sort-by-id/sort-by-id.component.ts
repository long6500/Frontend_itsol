import {Component, OnInit} from '@angular/core';
import {User} from '../services/data/profile-data.service';
import {OauthLoginService} from '../services/oauth-login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sort-by-id',
  templateUrl: './sort-by-id.component.html',
  styleUrls: ['./sort-by-id.component.css']
})
export class SortByIDComponent implements OnInit {
  users: User[];

  constructor(private oauthService: OauthLoginService, private router: Router) {
  }

  ngOnInit() {
    this.oauthService.sortByID().subscribe(data => {
      this.users = data;
    });
  }
}
