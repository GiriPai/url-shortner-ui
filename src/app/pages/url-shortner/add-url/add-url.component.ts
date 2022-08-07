import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { URL_REGEXP } from 'src/app/global/constants/constants';

@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.scss']
})
export class AddUrlComponent implements OnInit {

  uri = new FormControl('', [Validators.required, Validators.pattern(URL_REGEXP)])

  constructor() { }

  ngOnInit(): void {
  }

  handleFormSubmit() {
    console.log(this.uri.value)
  }

}
