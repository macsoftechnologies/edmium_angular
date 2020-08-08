import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchUniversitiesComponent } from "./pages/search-universities/search-universities.component";
import { UniversitySearchResultsComponent } from "./pages/university-search-results/university-search-results.component";

const routes: Routes = [
  { path: "", component: SearchUniversitiesComponent },
  { path: "universities-list", component: UniversitySearchResultsComponent },
  {
    path: "student",
    loadChildren: "./modules/student/student.module#StudentModule",
  },
  {
    path: "counsellor",
    loadChildren: "./modules/counselor/counselor.module#CounselorModule",
  },
  {
    path: "university",
    loadChildren:
      "./modules/universities/universities.module#UniversitiesModule",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
