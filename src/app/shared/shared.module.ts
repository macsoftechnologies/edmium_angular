import { NgModule } from "@angular/core";
import { SearchUniversitiesComponent } from "../pages/search-universities/search-universities.component";
import { UniversitySearchResultsComponent } from "../pages/university-search-results/university-search-results.component";
import { SearchUniversityPanelComponent } from "../components/search-university-panel/search-university-panel.component";
import { UniversitySearchFilterComponent } from "../components/university-search-filter/university-search-filter.component";
import { UniversityComponent } from "../components/university/university.component";
import { ChartsModule } from "ng2-charts";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    UniversitySearchResultsComponent,
    SearchUniversitiesComponent,
    SearchUniversityPanelComponent,
    UniversitySearchFilterComponent,
    UniversityComponent,
  ],
  imports: [ChartsModule, NgbModule],
  exports: [
    UniversitySearchResultsComponent,
    SearchUniversitiesComponent,
    SearchUniversityPanelComponent,
    UniversitySearchFilterComponent,
    UniversityComponent,
    ChartsModule,
    NgbModule,
  ],
})
export class SharedModule {}
