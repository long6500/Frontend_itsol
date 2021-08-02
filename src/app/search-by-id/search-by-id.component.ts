import {Component, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {User} from '../services/data/profile-data.service';
import {OauthLoginService} from '../services/oauth-login.service';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-search-by-id',
  templateUrl: './search-by-id.component.html',
  styleUrls: ['./search-by-id.component.css']
})
export class SearchByIdComponent implements OnInit {
  user: User;

  constructor(private oauthService: OauthLoginService, private router: Router,
              private appCom: AppComponent) {
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.oauthService.searchById(this.appCom.searchInput).subscribe(data => {
      this.user = data;
    });
    // window.location.reload();
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   this.oauthService.searchById(this.appCom.searchInput).subscribe(data => {
  //     this.users = data;
  //   });
  // }
  // update() {
  //   location.reload();
  // }

}
