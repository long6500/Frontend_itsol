import {Component, OnInit} from '@angular/core';
import {User} from 'src/app/services/data/profile-data.service';
import {OauthLoginService} from '../services/oauth-login.service';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-search-by-address',
  templateUrl: './search-by-address.component.html',
  styleUrls: ['./search-by-address.component.css']
})
export class SearchByAddressComponent implements OnInit {
  users: User[];


  constructor(private oauthService: OauthLoginService, private router: Router,
              private appCom: AppComponent) {
  }

  ngOnInit() {
    this.oauthService.searchByAddress(this.appCom.searchInput).subscribe(data => {
      this.users = data;
    });
  }


}
