import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatDividerModule} from '@angular/material/divider'; 
@Component({
  selector: 'erwin-welcome',
  standalone: true,
  imports: [ MatCardModule,MatProgressBarModule, MatDividerModule,RouterLink ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent{
  
  title = 'erwinnew';


}


// Générer des cœurs à intervalles réguliers
