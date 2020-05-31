import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {AuthService} from './auth.service';
import {AppService} from '@app/@core/services/app.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService, private app: AppService) {
  }

  intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    return next.handle(this.addTokenToRequest(req)).pipe(
      tap(() => {
        this.app.setLoad(true);
      }),
      finalize(() => this.app.setLoad(false)),
      catchError(err => {
        console.error(err);
        if (err.status === 401) {
          this.authService.logout();
        }
        return throwError(err);
      })
    );
  }

  private addTokenToRequest(request: HttpRequest<any>): HttpRequest<any> {
    const isAssets = request.url.includes('assets');
    if (!isAssets) {
      const url = environment.api;
      const token = localStorage.getItem('access_token');
      const headers = {
        'Content-Type': 'application/json'
      };
      if (token) {
        return request.clone({
          url: url + request.url, setHeaders: {
            Authorization: `Bearer ${token}`,
            ...headers
          }
        });
      } else {
        return request.clone({
          url: url + request.url,
          setHeaders: {
            Authorization: `Basic YmFsaWFuX2t1cnNhY2g6YmFsaWFuX2t1cnNhY2hfUEFTU1dPUkQ=`,
            ...headers
          }
        });
      }
    } else {
      return request.clone();
    }
  }

}
