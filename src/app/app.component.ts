import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {User} from './services/data/profile-data.service';
import {OauthLoginService} from './services/oauth-login.service';
import {SearchByAddressComponent} from './search-by-address/search-by-address.component';
import {SearchByIdComponent} from './search-by-id/search-by-id.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  // users: User[];
  sortType: string;
  searchType: string;
  // addre: string;
  searchInput: string;
  private searchById: SearchByIdComponent;

  constructor(private oauthService: OauthLoginService, private router: Router) {
  }

  ngOnInit() {
    this.sortType = 'origin';
    this.searchType = 'id';

    // this.router.navigate(['/list']);
  }

  ngOnChanges(changes: SimpleChanges) {
    // location.reload();
  }

  sort() {
    if (this.sortType === 'id') {
      this.router.navigate(['/sortByID']);
    }
    if (this.sortType === 'name') {
      this.router.navigate(['/sortByName']);
    }
    if (this.sortType === 'origin') {
      this.router.navigate(['/list']);
    }
  }

  selectSort(event: any) {
    this.sortType = event.target.value;
  }


  selectSearch(event: any) {
    this.searchType = event.target.value;
  }

  search() {
    if (this.searchType === 'address') {
      // this.ngOnInit();
      // this.searchById.ngOnInit();
      console.log('???');
      this.router.navigate(['/searchByAddress']);

    }
    if (this.searchType === 'id') {
      this.router.navigate(['/searchById']);
    }
  }

  update() {
    this.router.navigate(['/updateForm']);
  }


}
