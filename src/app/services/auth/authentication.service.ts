import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
  }

  authenticate(username, password) {
    if (username === 'test7' && password === 'Long6500') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }

}
