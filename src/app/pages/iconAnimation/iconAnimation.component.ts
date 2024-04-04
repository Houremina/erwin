import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatButtonModule} from '@angular/material/button'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'erwin-iconAnimation',
  standalone: true,
  imports: [ MatCardModule,MatProgressBarModule, MatDividerModule, MatButtonModule, CommonModule],
  templateUrl: './iconAnimation.component.html',
  styleUrl: './iconAnimation.component.css'
})
export class IconAnimationComponent implements OnInit{
   
  heartArray: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createHearts();
    setInterval(() => this.createHearts(), 500);
    setInterval(() => {
      if (this.heartArray.length > 30) {
        this.heartArray.shift();
      }
    }, 300);
  }

  createHearts(): void {
    const heart = {
      left: Math.floor(Math.random()*100) + "vw",
      animationDuration: Math.floor(Math.random()*2) + 10 + "s"
    };
    this.heartArray.push(heart);
  }
  }