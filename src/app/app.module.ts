import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UrlShortnerComponent } from './pages/url-shortner/url-shortner.component';
import { PageLayoutComponent } from './components/layouts/page-layout/page-layout.component';
import { AddUrlComponent } from './pages/url-shortner/add-url/add-url.component';
import { UrlListingsComponent } from './pages/url-shortner/url-listings/url-listings.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlShortnerComponent,
    PageLayoutComponent,
    AddUrlComponent,
    UrlListingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
