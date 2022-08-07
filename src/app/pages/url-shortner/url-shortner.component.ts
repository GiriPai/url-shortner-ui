import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IUriListing, IUriListingApi } from 'src/app/global/models/IUriListing';
import { AlertService } from 'src/app/components/alert/alert.service';
import { UrlShortnerService } from 'src/app/services/url-shortner.service';

@Component({
  selector: 'app-url-shortner',
  templateUrl: './url-shortner.component.html',
  styleUrls: ['./url-shortner.component.scss']
})
export class UrlShortnerComponent implements OnInit {

  uriListing: IUriListing[] = []

  isLoading: boolean = false

  constructor(private uriShortnerService: UrlShortnerService, private alertService: AlertService) { }

  ngOnInit() {
    this.reload()
  }

  handleSubmit(val: string) {
    this.isLoading = true
    this.uriShortnerService.saveUri(val).subscribe({
      next: (res) => { this.handleSubmitSuccess(res); this.isLoading = false },
      error: (err) => { this.handleApiError(err); this.isLoading = false },
    })
  }

  handleSubmitSuccess(res: any) {
    this.alertService.show('Url has been shortened and saved', 'success')
    this.reload()
  }

  reload() {
    this.isLoading = true
    this.uriShortnerService.getUri().subscribe({
      next: (res: IUriListingApi) => {
        this.uriListing = res.data
        this.isLoading = false
      },
      error: (err) => {
        this.handleApiError(err)
        this.isLoading = false
      },
    })
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
