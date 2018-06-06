import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

// Importing other components
import { StartPageComponent } from './start-page/start-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { StopPageComponent } from './stop-page/stop-page.component';


const routes: Routes = [
  { path: 'start', component: StartPageComponent },
  { path: 'game', component: GamePageComponent },
  { path: 'stop', component: StopPageComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
