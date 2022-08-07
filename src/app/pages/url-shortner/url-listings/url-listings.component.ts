import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IUriListing } from 'src/app/global/models/IUriListing';

@Component({
  selector: 'app-url-listings',
  templateUrl: './url-listings.component.html',
  styleUrls: ['./url-listings.component.scss']
})
export class UrlListingsComponent implements AfterViewInit {
  @ViewChild('paginator') paginator!: MatPaginator;
  @Input("uriListing") uriListing!: IUriListing[]

  dataSource!: MatTableDataSource<IUriListing>

  displayedColumns: string[] = ['fullUri', 'shortUri'];

  constructor() { }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.uriListing);
  }

}
