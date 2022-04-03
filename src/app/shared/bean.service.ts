import { Injectable } from '@angular/core';
import { Bean } from './bean';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BeanService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  addBean(bean: Bean): Observable<any> {
    return this.http.post<Bean>(this.url + '/create-bean/', bean, this.httpOptions)
      .pipe(
        catchError(this.handleError<Bean>('Add Bean'))
      );
  }

  getBean(id): Observable<Bean[]> {
    return this.http.get<Bean[]>(this.url + '/get-bean/' + id)
      .pipe(
        tap(_ => console.log(`Bean fetched: ${id}`)),
        catchError(this.handleError<Bean[]>(`Get Bean id=${id}`))
      );
  }
  getBeanList(): Observable<Bean[]> {
    return this.http.get<Bean[]>(this.url)
      .pipe(
        tap(beans => console.log('Beans fetched!')),
        catchError(this.handleError<Bean[]>('Get Beans', []))
      );
  }
  updateBean(id, bean: Bean): Observable<any> {
    return this.http.put(this.url + '/update-bean/' + id, bean, this.httpOptions)
      .pipe(tap(_ => console.log(`Bean updated: ${id}`)),
        catchError(this.handleError<Bean[]>('Update Bean')));
  }
  deleteBean(id): Observable<Bean[]> {
    return this.http.delete<Bean[]>(this.url + '/delete-bean/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Bean deleted: ${id}`)),
        catchError(this.handleError<Bean[]>('Delete Bean'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
