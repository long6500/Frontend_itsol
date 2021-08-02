import {NgModule, InjectionToken} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {Oauth2Handler} from './oauth2handler';
import {LogoutComponent} from './logout/logout.component';
import {HomeComponent} from './home/home/home.component';
import {Home_Module_routes} from './home/home-routing.module';
import {NotFoundComponent} from './not-found.component';
import {UserListComponent} from './user-list/user-list.component';
import {RegisterComponent} from './register/register.component';
import {MenuComponent} from './menu/menu.component';
import {SortByNameComponent} from './sort-by-name/sort-by-name.component';
import {SortByIDComponent} from './sort-by-id/sort-by-id.component';
import {SearchByAddressComponent} from './search-by-address/search-by-address.component';
import {SearchByIdComponent} from './search-by-id/search-by-id.component';
import {UpdateFormComponent} from './update-form/update-form.component';
export const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'list', component: UserListComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'sortByName', component: SortByNameComponent},
  {path: 'sortByID', component: SortByIDComponent},
  {path: 'searchByAddress', component: SearchByAddressComponent},
  {path: 'searchById', component: SearchByIdComponent},
  {path: 'updateForm', component: UpdateFormComponent},

  {
    path: 'home',
    component: HomeComponent,
    children: Home_Module_routes
    // canActivate: [RouteGuardService]
  },
  {path: 'oauth2/redirect', component: Oauth2Handler},
  {path: 'externalRedirect', canActivate: [externalUrlProvider], component: NotFoundComponent},
  {path: 'logout', component: LogoutComponent}
];

// , {onSameUrlNavigation: 'reload'} thêm ở sau routers
@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
