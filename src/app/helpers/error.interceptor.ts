import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HomeService } from '../shared/service/home.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private homeService: HomeService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      // if (err.status === 401) {
      //   this.homeService.logout();
      //   location.reload(true);
      // }
      // else if (err.status === 403){
      //   console.log('Access is denied');
      // }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }

}
