import { Injectable } from '@angular/core';
import { ApiEndpoints } from '../global/constants/ApiEndpoints';
import { ApiHttpService } from '../global/http/ApiHttpService.service';
import { IOptions } from '../global/models/IApiOptions';

@Injectable({
  providedIn: 'root'
})
export class UrlShortnerService {

  constructor(private http: ApiHttpService, private endpoints: ApiEndpoints) { }

  saveUri(uri: string) {
    return this.http.post(this.endpoints.URI_SHORTNER_RESOURCE, { fullUri: uri })
  }

  getUri(options?: IOptions) {
    return this.http.get(this.endpoints.URI_SHORTNER_RESOURCE, options)
  }
}
