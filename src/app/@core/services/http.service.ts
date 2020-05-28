import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, shareReplay} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class HttpService<T> {

  constructor(private http: HttpClient) {
  }

  create(url: string, data: T): Promise<T> {
    return this.http.post<T>(url, JSON.stringify(data)).pipe(
      catchError(err => throwError(err))
    ).toPromise();
  }

  update(url: string, data: T): Promise<T> {
    return this.http.put<T>(url, JSON.stringify(data)).pipe(
      catchError(err => throwError(err))
    ).toPromise();
  }

  findAll(url: string, query?: any): Observable<T[]> {
    let params = new HttpParams();
    if (query) {
      Object.keys(query).forEach(v => {
        params = params.set(v, query[v]);
      });
    }
    return this.http.get<T[]>(url, {params}).pipe(
      shareReplay(),
      map((val: any) => {
        if (!Array.isArray(val)) {
          return val.content;
        } else {
          return val;
        }
      }),
      catchError(err => throwError(err))
    );
  }

  findOne(url: string, id: number): Observable<T> {
    return this.http.get<T>(url + '/' + id).pipe(
      catchError(err => throwError(err))
    );
  }

  findOneParam(url: string, id: number): Observable<T> {
    return this.http.get<T>(url + '?id=' + id).pipe(
      catchError(err => throwError(err))
    );
  }

  delete(url: string, id: string): Promise<T> {
    return this.http.delete<T>(url + '/' + id).pipe(
      catchError(err => throwError(err))
    ).toPromise();
  }

}
