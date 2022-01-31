import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule
  ]

})
export class MaterialModule { }
