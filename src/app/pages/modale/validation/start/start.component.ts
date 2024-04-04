import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogRef } from "@angular/material/dialog";
import { Router, RouterLink } from "@angular/router";

@Component({
    selector: 'erwin-start-dialog',
    templateUrl: './start.component.html',    
    styleUrl: './start.component.css',
    standalone: true,
    imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent,RouterLink],
  })
  export class StartComponent {
    constructor( private dialogRef: MatDialogRef<StartComponent>, private router: Router) {}

    starting() {
      this.dialogRef.close();
      this.router.navigate(['/starting']);      
    }
  }