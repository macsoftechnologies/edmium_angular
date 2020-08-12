import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UniversityHomeComponent } from "./pages/university-home/university-home.component";
import { UniversityDashboardComponent } from "./components/university-dashboard/university-dashboard.component";
import { UploadInformationComponent } from "./components/upload-information/upload-information.component";
import { CandidateSearchComponent } from "./components/candidate-search/candidate-search.component";
import { ManageStudentsComponent } from "./components/manage-students/manage-students.component";
import { DocumentsComponent } from "./components/documents/documents.component";

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
