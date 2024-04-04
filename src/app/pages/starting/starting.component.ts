import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
import { CommonModule } from '@angular/common';
import { IconAnimationComponent } from '../iconAnimation/iconAnimation.component';
import { AppComponent } from '../../app.component';
import {MatGridListModule} from '@angular/material/grid-list'; 
@Component({
  selector: 'erwin-starting',
  standalone: true,
  imports: [ MatCardModule,MatProgressBarModule, MatDividerModule, MatButtonModule, CommonModule, MatGridListModule],
  templateUrl: './starting.component.html',
  styleUrl: './starting.component.css'
})
export class StartingComponent {
  title = 'erwinnew';
  positions : { x: number, y: number }[]= [];
  LAST_STEP : number = 5;
  reponse="bad";
  steps:number = 1;
  heartPositions: { x: number, y: number }[] = [];
  constructor(public dialog: MatDialog, public router: Router) {
  }
  openDialog(): void {
    this.dialog.open(ValidationComponent, {
      width: '400px'
    });
  }

  choose(value: boolean) {
    if(value)
    {
         AppComponent.goodAnswer = true;
         AppComponent.badAnswer = false;
    }
  else{
    AppComponent.goodAnswer = false;
    AppComponent.badAnswer = true;

  }
}
activeNext(){
  return !AppComponent.goodAnswer;
}
next(num: number){

  AppComponent.badAnswer = false;
  AppComponent.goodAnswer = false;
  this.steps = num;

  if (num === this.LAST_STEP){
      this.router.navigate(['/final']);      
  }
  }
getBadAnswer() {
  return AppComponent.badAnswer;
}

getGoodAnswer() {
  return AppComponent.goodAnswer;
}


  



 
}
