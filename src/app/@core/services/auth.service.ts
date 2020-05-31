import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, switchMap, tap} from 'rxjs/operators';
import {Observable, of, Subject, throwError} from 'rxjs';

interface IToken {
  access_token: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {

  private user = new Subject<any>();
  user$ = this.user.asObservable();

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    this.logout();
    return this.http.post('oauth/token', {}, {
      params: new HttpParams().set('username', email).set('password', password).set('grant_type', 'password')
    }).pipe(
      tap((val: IToken) => {
        if (val && val.access_token) {
          localStorage.setItem('access_token', val.access_token);
        }
      }),
      switchMap(() => this.getCurrentUser()),
      catchError(err => throwError(err)));
  }

  logout() {
    localStorage.removeItem('access_token');
    this.user.next(null);
  }

  getCurrentUser(): Observable<any> {
    const user = JSON.parse(localStorage.getItem('user'));
    this.user.next(user);
    return this.http.get<any>('user').pipe(
      tap(u => {
        this.user.next(u);
        localStorage.setItem('user', JSON.stringify(u));
      })
    );
  }

  isAuth$(): Observable<boolean> {
    const isAuth = !!localStorage.getItem('access_token');
    return of(isAuth);
  }

  getUser(): any {
    return JSON.parse(localStorage.getItem('user'));
  }

  isAuth(): boolean {
    return !!localStorage.getItem('access_token');
  }

}
