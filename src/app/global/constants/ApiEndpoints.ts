
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiEndpoints {
  public readonly URI_SHORTNER_RESOURCE: string = `${environment.api}/api/v1/uri`;
}