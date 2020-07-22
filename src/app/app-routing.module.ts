import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnrollComponent } from './enroll/enroll.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'enroll', component: EnrollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
