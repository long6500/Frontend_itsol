import {Component, OnInit} from '@angular/core';
import {User} from '../services/data/profile-data.service';
import {OauthLoginService} from '../services/oauth-login.service';
import {Router} from '@angular/router';
import {UserListComponent} from '../user-list/user-list.component';

@Component({
  selector: 'app-sort-by-name',
  templateUrl: './sort-by-name.component.html',
  styleUrls: ['./sort-by-name.component.css']
})
export class SortByNameComponent implements OnInit {

  users: User[];

  constructor(private oauthService: OauthLoginService, private router: Router) {
  }

  ngOnInit() {
    this.oauthService.sortByName().subscribe(data => {
      this.users = data;
    });
  }


}
