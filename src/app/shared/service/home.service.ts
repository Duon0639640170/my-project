import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

const AUTH_MANAGER_URL = environment.auth_manager_url;
const ACCESS_TOKEN_URL = environment.authen.access_token_url;
const client_id = environment.authen.client_id;
const client_secret = environment.authen.client_secret;

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // tslint:disable-next-line: variable-name
  private _$userType: BehaviorSubject<any> = new BehaviorSubject<any>({});
  constructor(private http: HttpClient, private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      Authorization: 'Basic ' + btoa(client_id + ':' + client_secret),
    }),
  };

  public get $userType(): Observable<any> {
    return this._$userType.asObservable();
  }

  public set $userType(value: Observable<any>) {
    value.subscribe(data => {
      this._$userType.next(data);
    });
  }

  public authentication(data: any) {
    let params: HttpParams = new HttpParams();
    params = params.set('username', data.username);
    params = params.set('password', data.password);
    params = params.set('grant_type', 'password');
    return this.http
      .post<any>(ACCESS_TOKEN_URL, params, this.httpOptions)
      .pipe(delay(3000))
      .subscribe(
        (res) => this.initToken(res, data.username),
        (error) => this.handleError(error)
      );
  }

  public getUserInfo(username: string): Observable<any> {
    return this.http.get(AUTH_MANAGER_URL + '/user/' + username);
  }

  initToken(token: any, username: string) {
    debugger;
    console.log(token);

    // set access token
    localStorage.setItem('access_token', token.access_token);
    localStorage.setItem('refresh_token', token.refresh_token);
    localStorage.setItem('expires_in', token.expires_in);

    // set user name
    localStorage.setItem('username', username);
    localStorage.setItem('user', username);

    // get user information and role
    this.getUserInfo(username).subscribe(
      (res) => {
        console.log(res);
        const userType = this.getUserType(res.role);
        this.$userType = of(userType);
        this.router.navigate([`${userType}`]);

        // set shop id and user type
        localStorage.setItem('userType', JSON.stringify(userType));
        localStorage.setItem('shop', JSON.stringify(res.id));
      },
      (error) => this.handleError(error)
    );
  }

  getUserType(role: any): any{
    if (role === 1) {
      return 'admin';
    } else if (role === 2) {
      return 'user';
    } else {
      return 'home';
    }
  }

  isLogin() {
    if (localStorage.getItem('access_token')) {
      return true;
    } else {
      return false;
    }
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}

