import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentDashboardComponent } from "./pages/student-dashboard/student-dashboard.component";
import { StudentUniversitiesListComponent } from "./pages/student-universities-list/student-universities-list.component";
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';


const routes: Routes = [
  { path: "dashboard", component: StudentDashboardComponent },
  { path: "universities", component: StudentUniversitiesListComponent },
  { path: "profile", component: StudentProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
