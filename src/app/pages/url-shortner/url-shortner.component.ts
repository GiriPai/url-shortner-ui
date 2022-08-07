import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertService } from 'src/app/global/ui/alert/alert.service';
import { UrlShortnerService } from 'src/app/services/url-shortner.service';

@Component({
  selector: 'app-url-shortner',
  templateUrl: './url-shortner.component.html',
  styleUrls: ['./url-shortner.component.scss']
})
export class UrlShortnerComponent {

  constructor(private uriShortnerService: UrlShortnerService, private alertService: AlertService) { }

  handleSubmit(val: string) {
    this.uriShortnerService.saveUri(val).subscribe({
      next: (res) => { this.handleSubmitSuccess(res) },
      error: (err) => { this.handleApiError(err) }
    })
  }

  handleSubmitSuccess(res: any) {
    this.alertService.show('Url has been shortened and saved', 'success')
  }

  handleApiError(err: HttpErrorResponse) {
    switch (err.status) {
      case HttpStatusCode.Conflict:
        this.alertService.show("URL already Exists.", 'error')
        break;
      case HttpStatusCode.BadRequest:
        this.alertService.show("Bad Request", 'error')
        break
      default:
        this.alertService.show("Server Error", 'error')
        break;
    }
  }

}
