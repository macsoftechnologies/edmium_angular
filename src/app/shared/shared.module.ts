import { NgModule } from "@angular/core";
import { SearchUniversitiesComponent } from "../pages/search-universities/search-universities.component";
import { UniversitySearchResultsComponent } from "../pages/university-search-results/university-search-results.component";
import { SearchUniversityPanelComponent } from "../components/search-university-panel/search-university-panel.component";
import { UniversitySearchFilterComponent } from "../components/university-search-filter/university-search-filter.component";
import { UniversityComponent } from "../components/university/university.component";
import { ChartsModule } from "ng2-charts";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from "./components/login/login.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormControl, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    UniversitySearchResultsComponent,
    SearchUniversitiesComponent,
    SearchUniversityPanelComponent,
    UniversitySearchFilterComponent,
    UniversityComponent,
    LoginComponent,
  ],
  imports: [
    ChartsModule,
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    UniversitySearchResultsComponent,
    SearchUniversitiesComponent,
    SearchUniversityPanelComponent,
    UniversitySearchFilterComponent,
    UniversityComponent,
    LoginComponent,
    ChartsModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [LoginComponent],
})
export class SharedModule {}
