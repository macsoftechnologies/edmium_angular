import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UniversityHomeComponent } from "./pages/university-home/university-home.component";
import { UniversityDashboardComponent } from "./pages/university-dashboard/university-dashboard.component";
import { DocumentsComponent } from "./pages/documents/documents.component";
import { UploadInformationComponent } from "./pages/upload-information/upload-information.component";
import { CandidateSearchComponent } from "./pages/candidate-search/candidate-search.component";
import { ManageStudentsComponent } from "./pages/manage-students/manage-students.component";

const routes: Routes = [
  {
    path: "",
    component: UniversityHomeComponent,
    children: [
      { path: "dashboard", component: UniversityDashboardComponent },
      { path: "upload_information", component: UploadInformationComponent },
      { path: "candidate-search", component: CandidateSearchComponent },
      { path: "manage-students", component: ManageStudentsComponent },
      { path: "documents-upload", component: DocumentsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversitiesRoutingModule {}
