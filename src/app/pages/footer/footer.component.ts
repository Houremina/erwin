import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'erwin-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  title = 'erwinnew';
  i = 1;
  activeFooter : boolean = true;
  open() {
  
    if(AppComponent.badAnswer){
      this.activeFooter = false;
      setInterval(() => {
        this.activeFooter = true;
      }, 10000);
      AppComponent.goodAnswer = true;
      AppComponent.badAnswer = false;
    }
    
    
   
  }  
}
