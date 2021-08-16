import {Component, OnInit} from '@angular/core';
import {ProfileDataService, User} from 'src/app/services/data/profile-data.service';
import {OauthLoginService} from '../services/oauth-login.service';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common'
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  searchInput: any;
  firstname: any;
  searchType: string;

  p: number = 1;


  constructor(private datepipe: DatePipe, private oauthService: OauthLoginService, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.searchType = 'id';
    this.oauthService.findAll().subscribe(data => {
      this.users = data;
    });
  }


  Search() {
    if (this.searchInput == "") {
      this.ngOnInit();
    } else if (this.searchType == "firstname") {
      this.users = this.users.filter(res => {
        return res.firstname.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase());
      });
    } else if (this.searchType == "id") {
      this.users = this.users.filter(res => {
        return res.id.toString().match(this.searchInput);
      });
    }
  }

  key: string;
  reverse: boolean = true;

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  update(id) {
    this.router.navigate(['/updateForm', id]);
  }

  selectSearch(event: any) {
    this.searchType = event.target.value;
  }
}
