import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatButtonModule} from '@angular/material/button'; 
import {
    MatDialog,
    MatDialogRef,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  } from '@angular/material/dialog';
import { ValidationComponent } from '../modale/validation/validation.component';
@Component({
  selector: 'erwin-holdup',
  standalone: true,
  imports: [ MatCardModule,MatProgressBarModule, MatDividerModule, MatButtonModule],
  templateUrl: './holdup.component.html',
  styleUrl: './holdup.component.css'
})
export class HoldupComponent {
  title = 'erwinnew';
  reponse="";
  steps:number = 1;
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    this.dialog.open(ValidationComponent, {
      width: '400px'
    });
  }

  choose(value: boolean) {
    if(value)
    this.reponse = "good";
  else
    this.reponse = "bad";
  }
  next(num: number){
    this.steps = num;
  }

  
}
