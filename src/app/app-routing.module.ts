import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnrollComponent } from './enroll/enroll.component';
import { ProgramsComponent } from './programs/programs.component';
import { AboutComponent } from './about/about.component';
import { TutionComponent } from './tution/tution.component';
import { TourComponent } from './tour/tour.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'enroll', component: EnrollComponent},
  {path: 'programs', component: ProgramsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'tution', component: TutionComponent},
  {path: 'tour', component: TourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
