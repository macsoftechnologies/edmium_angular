import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounselorRoutingModule } from './counselor-routing.module';
import { CounsellorDashboardComponent } from './pages/counsellor-dashboard/counsellor-dashboard.component';
import { SearchProgramComponent } from './components/search-program/search-program.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageUniversitiesComponent } from './components/manage-universities/manage-universities.component';
import { ManageStudentComponent } from './components/manage-student/manage-student.component';
import { ManageApplicationsComponent } from './components/manage-applications/manage-applications.component';
import { DocumentsUploadComponent } from './components/documents-upload/documents-upload.component';

@NgModule({
  declarations: [CounsellorDashboardComponent, SearchProgramComponent, DashboardComponent, ManageUniversitiesComponent, ManageStudentComponent, ManageApplicationsComponent, DocumentsUploadComponent],
  imports: [
    CommonModule,
    CounselorRoutingModule
  ]
})
export class CounselorModule { }
