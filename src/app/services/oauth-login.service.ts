import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Constants, httpOption} from '../constants';
import {Observable} from 'rxjs';
import {User} from 'src/app/services/data/profile-data.service';

export const TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class OauthLoginService {

  constructor(private http: HttpClient) {
  }

  basicJwtAuthLogin(user) {
    return this.http.post<any>(Constants.API_BASE_URL + '/auth/signin', user)
      .pipe(map(data => {
          localStorage.setItem(TOKEN, `Bearer ${data.accessToken}`);
          return data;
        }
        )
      );
  }

  public login(user: User): Observable<any> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(user.userName + ':' + user.password)});
    return this.http.get(Constants.API_BASE_URL + '/auth/signin', {headers, responseType: 'text' as 'json'});
  }

  // login(user: User): Observable<any> {
  //   return this.http.post<User>(Constants.API_BASE_URL + '/auth/signin', user)
  //     .pipe(map(users => {
  //         // user.authdata = window.btoa(username + ':' + password);
  //         localStorage.setItem('user', JSON.stringify(users));
  //         // this.userLogin.next(user);
  //         return users;
  //       })
  //     );
  // }

  // khong su dung security
  // login(user: User): Observable<any> {
  //   return this.http.post<User>(Constants.API_BASE_URL + '/auth/signin', user);
  // }

  // login(account: ReqLogin): Observable<RespLogin> {
  //   return this.http.post<RespLogin>(
  //     Constants.API_BASE_URL + '/auth/signin',
  //     {
  //       username: account.userName,
  //       password: account.password,
  //     }, httpOption);
  // }

  userSignup(user) {
    return this.http.post<any>(Constants.API_BASE_URL + '/auth/signup', user);
  }

  userRegister(user) {
    return this.http.post<any>(Constants.API_BASE_URL + '/user/register', user);
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(Constants.API_BASE_URL + '/user/getAll');
  }

// sort by id
  public sortByID(): Observable<User[]> {
    return this.http.get<User[]>(Constants.API_BASE_URL + '/user/sortByIdDesc');
  }

  // sort by name
  public sortByName(): Observable<User[]> {
    return this.http.get<User[]>(Constants.API_BASE_URL + '/user/sortByNameDesc');
  }

  // search by address
  public searchByAddress(address): Observable<User[]> {
    return this.http.get<User[]>(Constants.API_BASE_URL + '/user/getByAddress/' + address);
  }

  // search by id
  public searchById(id): Observable<User> {
    return this.http.get<User>(Constants.API_BASE_URL + '/user/getById/' + id);
  }

  getVerificationLink(email) {
    return this.http.post<any>(Constants.API_BASE_URL + '/api/auth/send-email', email);
  }

  getOtp(body) {
    return this.http.post<any>(Constants.API_BASE_URL + '/api/auth/generate-otp', body);
  }

  submitOtp(body) {
    return this.http.post<any>(Constants.API_BASE_URL + '/api/auth/validate-otp', body);
  }

  resetPassword(body) {
    return this.http.post<any>(Constants.API_BASE_URL + '/api/auth/reset-password', body);
  }

  getAuthToken() {
    if (localStorage.getItem(TOKEN)) {
      return localStorage.getItem(TOKEN);
    }
  }

  setAuthToken(token) {
    localStorage.setItem(TOKEN, token);
  }

  isUserLoggedIn() {
    const token = localStorage.getItem(TOKEN);
    if (token === null || token.includes('undefined')) {
      return false;
    } else {
      return true;
    }
  }

  removeToken() {

    localStorage.removeItem(TOKEN);
  }
}
