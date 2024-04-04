import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import {MatCardModule} from '@angular/material/card'; 
import { IconAnimationComponent } from './pages/iconAnimation/iconAnimation.component';
import { error } from 'console';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, FooterComponent, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  static badAnswer = false;
  static goodAnswer = false;

  title = 'erwinnew';
  getClassCss(){
    if (AppComponent.badAnswer )
    return'main badAnswer';
    else if (AppComponent.goodAnswer )
    return'main goodAnswer';
  else
    return'main';

  }

}
