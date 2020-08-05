import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StudentRoutingModule } from "./student-routing.module";
// import { SearchUniversitiesComponent } from '../../pages/search-universities/search-universities.component';
// import { SearchUniversityPanelComponent } from '../../components/search-university-panel/search-university-panel.component';
// import { UniversitySearchFilterComponent } from '../../components/university-search-filter/university-search-filter.component';
import { StudentDashboardComponent } from "./pages/student-dashboard/student-dashboard.component";
// import { UniversityComponent } from '../../components/university/university.component';
import { FavouriteUniversitiesComponent } from "./components/favourite-universities/favourite-universities.component";
import { InterestedUniversitiesComponent } from "./components/interested-universities/interested-universities.component";
import { ListOfUniversitiesComponent } from "./components/list-of-universities/list-of-universities.component";
import { StudentProfileComponent } from "./components/student-profile/student-profile.component";
import { StudentUniversitiesListComponent } from "./pages/student-universities-list/student-universities-list.component";

@NgModule({
  declarations: [
    StudentDashboardComponent,
    FavouriteUniversitiesComponent,
    InterestedUniversitiesComponent,
    ListOfUniversitiesComponent,
    StudentProfileComponent,
    StudentUniversitiesListComponent,
  ],
  imports: [CommonModule, StudentRoutingModule],
})
export class StudentModule {}
