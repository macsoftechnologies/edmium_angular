import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UniversitiesRoutingModule } from "./universities-routing.module";
import { UniversityHomeComponent } from "./pages/university-home/university-home.component";
import { UniversityDashboardComponent } from "./components/university-dashboard/university-dashboard.component";
import { UploadInformationComponent } from "./components/upload-information/upload-information.component";
import { CandidateSearchComponent } from "./components/candidate-search/candidate-search.component";
import { ManageStudentsComponent } from "./components/manage-students/manage-students.component";
import { DocumentsComponent } from "./components/documents/documents.component";
import { SharedModule } from "src/app/shared/shared.module";
import { AddScholarshipComponent } from "./components/add-scholarship/add-scholarship.component";
import { AddBrochureComponent } from "./components/add-brochure/add-brochure.component";
import { AddEventComponent } from "./components/add-event/add-event.component";
import { AddInternalCounselorTrainingComponent } from "./components/add-internal-counselor-training/add-internal-counselor-training.component";
import { CourseCurriculumComponent } from "./components/course-curriculum/course-curriculum.component";
import { CandidateProfileComponent } from "./components/candidate-profile/candidate-profile.component";
@NgModule({
  declarations: [
    UniversityDashboardComponent,
    UploadInformationComponent,
    CandidateSearchComponent,
    ManageStudentsComponent,
    DocumentsComponent,
    UniversityHomeComponent,
    AddScholarshipComponent,
    AddBrochureComponent,
    AddEventComponent,
    AddInternalCounselorTrainingComponent,
    CourseCurriculumComponent,
    CandidateProfileComponent,
  ],
  imports: [CommonModule, UniversitiesRoutingModule, SharedModule],
  entryComponents: [
    AddScholarshipComponent,
    AddBrochureComponent,
    AddEventComponent,
    AddInternalCounselorTrainingComponent,
    CourseCurriculumComponent,
    CandidateProfileComponent,
  ],
})
export class UniversitiesModule {}
