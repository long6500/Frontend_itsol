import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from 'src/app/constants';

export class User {
  constructor(public id: number,
              public firstname: string,
              public middlename: string,
              public lastname: string,
              public userName: string,
              public password: string,
              // public imageUrl: string,
              // public emailVerified: boolean
              public role: number,
              public dob: Date,
              public gender: number,
              public phone: number,
              public email: string,
              public type: string,
              public personalid: number,
              public address: string,
              public education: string,
              public school: string,
              public faculty: string,
              public course: string,
              public timejoin: Date,
              public status: number) {
  }
}

export class ReqLogin {
  constructor(public userName: string,
              public password: string) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  constructor(private http: HttpClient) {
  }

  getUserInfo() {
    return this.http.get<User>(Constants.API_BASE_URL + 'api/auth/user/me');
  }
}


export interface RespLogin {
  userName: string;
  accessToken: string;
  roles: string;
  id: string;
}
