import { NgModule } from "@angular/core"
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const materialModules = [
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule
]

@NgModule({
  imports: [
    materialModules
  ],
  exports: [
    materialModules
  ]
})
export class MaterialModule { }
