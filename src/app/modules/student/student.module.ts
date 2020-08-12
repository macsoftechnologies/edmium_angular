import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StudentRoutingModule } from "./student-routing.module";
import { StudentDashboardComponent } from "./pages/student-dashboard/student-dashboard.component";
import { FavouriteUniversitiesComponent } from "./components/favourite-universities/favourite-universities.component";
import { InterestedUniversitiesComponent } from "./components/interested-universities/interested-universities.component";
import { ListOfUniversitiesComponent } from "./components/list-of-universities/list-of-universities.component";
import { StudentUniversitiesListComponent } from "./pages/student-universities-list/student-universities-list.component";
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ScholarshipsComponent } from './pages/scholarships/scholarships.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    StudentDashboardComponent,
    FavouriteUniversitiesComponent,
    InterestedUniversitiesComponent,
    ListOfUniversitiesComponent,
    StudentProfileComponent,
    StudentUniversitiesListComponent,
    StudentProfileComponent,
    ScholarshipsComponent,
    HomeComponent,
    
  ],
  imports: [CommonModule, StudentRoutingModule,IvyCarouselModule],
})
export class StudentModule {}
