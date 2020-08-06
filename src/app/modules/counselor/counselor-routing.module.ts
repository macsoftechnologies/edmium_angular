import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounsellorDashboardComponent } from './pages/counsellor-dashboard/counsellor-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchProgramComponent } from './components/search-program/search-program.component';
import { ManageUniversitiesComponent } from './components/manage-universities/manage-universities.component';
import { ManageStudentComponent } from './components/manage-student/manage-student.component';
import { ManageApplicationsComponent } from './components/manage-applications/manage-applications.component';
import { DocumentsUploadComponent } from './components/documents-upload/documents-upload.component';

const routes: Routes = [
  {
    path: "", component: CounsellorDashboardComponent,
    children: [
      { path: "search-program", component: SearchProgramComponent },
      { path: "manage-universities", component: ManageUniversitiesComponent },
      { path: "manage-student", component: ManageStudentComponent },
      { path: "manage-application", component: ManageApplicationsComponent },
      { path: "documents-upload", component: DocumentsUploadComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounselorRoutingModule { }
