import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HoldupComponent } from './pages/holdup/holdup.component';
import { StartingComponent } from './pages/starting/starting.component';
import { FinalComponent } from './pages/final/final.component';

export const routes: Routes = [
  { path: '',   redirectTo: '/erwin', pathMatch: 'full' },
  { path: 'erwin', component: WelcomeComponent },
  { path: 'holdUp',        component: HoldupComponent },
  { path: 'final',        component: FinalComponent },
  { path: 'starting', component: StartingComponent }

];
