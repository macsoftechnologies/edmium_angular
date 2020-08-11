import { NgModule } from "@angular/core";
import { SearchUniversitiesComponent } from "../pages/search-universities/search-universities.component";
import { UniversitySearchResultsComponent } from "../pages/university-search-results/university-search-results.component";
import { SearchUniversityPanelComponent } from "../components/search-university-panel/search-university-panel.component";
import { UniversitySearchFilterComponent } from "../components/university-search-filter/university-search-filter.component";
import { UniversityComponent } from "../components/university/university.component";

@NgModule({
  declarations: [
    UniversitySearchResultsComponent,
    SearchUniversitiesComponent,
    SearchUniversityPanelComponent,
    UniversitySearchFilterComponent,
    UniversityComponent,
  ],
  exports: [
    UniversitySearchResultsComponent,
    SearchUniversitiesComponent,
    SearchUniversityPanelComponent,
    UniversitySearchFilterComponent,
    UniversityComponent,
  ],
})
export class SharedModule {}
