import {Component, OnInit} from '@angular/core';
import {ProfileDataService, User} from 'src/app/services/data/profile-data.service';
import {OauthLoginService} from '../services/oauth-login.service';
import {Router} from '@angular/router';
import {UpdateFormComponent} from '../update-form/update-form.component';
import {DatePipe} from '@angular/common'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  dates: string;
  addre: string;

  private updateForm: UpdateFormComponent;

  constructor(private datepipe: DatePipe, private oauthService: OauthLoginService, private router: Router) {
  }

  ngOnInit() {
    this.oauthService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  // get employee by id then send to form
  // update(id: number) {
  // }

  goTo() {
    this.router.navigate(['/updateForm']);
  }


}
