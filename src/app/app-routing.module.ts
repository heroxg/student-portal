import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from 'src/app/pages/login/login.component';
import { CourseComponent } from './pages/course/course.component';

const routes: Routes = [
  // {path: '', redirectTo: '/course', pathMatch: 'full'},
  {path: 'courses', component: CourseComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
