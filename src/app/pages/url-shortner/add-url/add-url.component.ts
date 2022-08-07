import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { URL_REGEXP } from 'src/app/global/constants/constants';


@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.scss']
})
export class AddUrlComponent implements OnInit {

  @Output('handleSubmit') handleSubmit = new EventEmitter<string>()

  uri = new FormControl('', [Validators.pattern(URL_REGEXP)])

  constructor() { }

  ngOnInit(): void {
  }

  handleFormSubmit() {
    this.handleSubmit.emit(this.uri.value)
    this.uri.reset()
  }

}
