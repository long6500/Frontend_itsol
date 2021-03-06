import {HttpHeaders} from '@angular/common/http';

export class Constants {
    public static API_BASE_URL = 'http://localhost:8081';
    public static OAUTH2_REDIRECT_URI = 'http://localhost:4200/oauth2/redirect';

    public static GOOGLE_AUTH_URI = Constants.API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + Constants.OAUTH2_REDIRECT_URI;
    public static FACEBOOK_AUTH_URI = Constants.API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + Constants.OAUTH2_REDIRECT_URI;
    public static GITHUB_AUTH_URI = Constants.API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + Constants.OAUTH2_REDIRECT_URI;

    public static LOGO_URL = 'assets/images/companyLogo.png';
    public static ADDON_URL = 'assets/images/addon.png';
}

export const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  })
};

