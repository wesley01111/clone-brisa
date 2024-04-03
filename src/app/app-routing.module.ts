import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContentComponent } from './component/home/content/content.component';

const routes: Routes = [
  {
    path:'',
   component:HomeComponent
  },
  {
    path:'content',
   component:ContentComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
