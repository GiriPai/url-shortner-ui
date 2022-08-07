import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


export interface IAlertOptions {
  autoClose: boolean,
  duration: number,
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  private duration: number = 4000;

  constructor(private _snackBar: MatSnackBar) {

  }



  show(msg: string, variant: string = 'default', options?: IAlertOptions) {
    this._snackBar.open(msg, undefined, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: options?.duration ? options.duration : this.duration,
      panelClass: [variant]
    });
  }
}
