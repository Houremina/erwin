import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogRef, MatDialog } from "@angular/material/dialog";
import { StartComponent } from "./start/start.component";

@Component({
    selector: 'erwin-validation-dialog',
    templateUrl: './validation.component.html',
    styleUrl: './validation.component.css',
    standalone: true,
    imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  })
  export class ValidationComponent {
    constructor(public dialogRef: MatDialogRef<ValidationComponent>,public dialog: MatDialog) {}
  openDialog(): void {
    this.dialogRef.close();
    this.dialog.open(StartComponent, {
      width: '400px'
    });
  }
  }