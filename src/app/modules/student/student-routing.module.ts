import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentDashboardComponent } from "./pages/student-dashboard/student-dashboard.component";

const routes: Routes = [
  { path: "dashboard", component: StudentDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
