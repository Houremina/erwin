import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'erwin-final',
  standalone: true,
  imports: [ MatCardModule,MatProgressBarModule, MatDividerModule, MatButtonModule, CommonModule],
  templateUrl: './final.component.html',
  styleUrl: './final.component.css'
})
export class FinalComponent {
  title = 'erwinnew';
}
