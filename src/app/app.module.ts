import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularBootstrapToastsModule} from 'angular-bootstrap-toasts';
import {NgSpinnerModule} from 'ng-bootstrap-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastNotificationsModule} from 'ngx-toast-notifications';

import {AppRoutingModule, externalUrlProvider} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {Oauth2Handler} from './oauth2handler';
import {LogoutComponent} from './logout/logout.component';
import {HttpIntercpterService} from './services/http/http-intercpter.service';
import {HomeModule} from './home/home.module';
import {SharedModule} from './shared/shared.module';
import {LoaderInterceptorService} from './services/http/loader-interceptor.service';
import {SocialLoginComponent} from './social-login/social-login.component';
import {ExternalUrlDirective} from './directives/external-url.directive';
import {ActivatedRouteSnapshot} from '@angular/router';
import {NotFoundComponent} from './not-found.component';
import {UserListComponent} from './user-list/user-list.component';
import {RegisterComponent} from './register/register.component';
import {MenuComponent} from './menu/menu.component';
import {SortByNameComponent} from './sort-by-name/sort-by-name.component';
import {SortByIDComponent} from './sort-by-id/sort-by-id.component';
import {SearchByAddressComponent} from './search-by-address/search-by-address.component';
import {SearchByIdComponent} from './search-by-id/search-by-id.component';
import {UpdateFormComponent} from './update-form/update-form.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    Oauth2Handler,
    LogoutComponent,
    SocialLoginComponent,
    ExternalUrlDirective,
    NotFoundComponent,
    UserListComponent,
    RegisterComponent,
    MenuComponent,
    SortByNameComponent,
    SortByIDComponent,
    SearchByAddressComponent,
    SearchByIdComponent,
    UpdateFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgSpinnerModule,
    BrowserAnimationsModule,
    AngularBootstrapToastsModule,
    HomeModule,
    SharedModule,
    ToastNotificationsModule.forRoot(
      {
        duration: 6000, type: 'primary',
        position: 'bottom-right',
        preventDuplicates: true
      }
    ),
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercpterService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true},
    {
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot) => {
        const externalUrl = route.paramMap.get('externalUrl');
        window.open(externalUrl, '_self');
      },
    },
    DatePipe,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
