import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { salonlarComponent } from './components/salonlar/salonlar.component';


const routes: Routes = [  
  { path: 'list'  , component: salonlarComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
