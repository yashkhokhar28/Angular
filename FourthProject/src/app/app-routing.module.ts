import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { ContactComponent } from './contact/contact.component';
import { DetailFacultyComponent } from './detail-faculty/detail-faculty.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faculties', component: FacultyComponent },
  { path: 'faculties/add', component: AddFacultyComponent },
  { path: 'faculties/edit/:id', component: AddFacultyComponent },
  { path: 'faculties/:id', component: DetailFacultyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
