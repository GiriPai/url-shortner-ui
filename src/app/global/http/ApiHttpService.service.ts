
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { prepareQueryString } from '../utils/QueryStringParameters.util';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  constructor(
    private http: HttpClient
  ) { }

  public get(url: string, options?: any): Observable<any> {
    if (options) {
      url = `${url}?${prepareQueryString(options)}`
    }
    return this.http.get(url);
  }
  public post(url: string, data: any, options?: any) {
    return this.http.post(url, data, options);
  }
  public put(url: string, data: any, options?: any) {
    return this.http.put(url, data, options);
  }
  public delete(url: string, options?: any) {
    return this.http.delete(url, options);
  }
}