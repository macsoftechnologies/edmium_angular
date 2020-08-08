import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UniversitiesRoutingModule } from "./universities-routing.module";
import { UniversityDashboardComponent } from "./pages/university-dashboard/university-dashboard.component";
import { UploadInformationComponent } from "./pages/upload-information/upload-information.component";
import { CandidateSearchComponent } from "./pages/candidate-search/candidate-search.component";
import { ManageStudentsComponent } from "./pages/manage-students/manage-students.component";
import { DocumentsComponent } from "./pages/documents/documents.component";
import { UniversityHomeComponent } from "./pages/university-home/university-home.component";

@NgModule({
  declarations: [
    UniversityDashboardComponent,
    UploadInformationComponent,
    CandidateSearchComponent,
    ManageStudentsComponent,
    DocumentsComponent,
    UniversityHomeComponent,
  ],
  imports: [CommonModule, UniversitiesRoutingModule],
})
export class UniversitiesModule {}
