import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { LoginComponent } from "./shared/components/login/login.component";
import { RegisterComponent } from "./shared/components/register/register.component";
import { UniversitySearchResultsComponent } from "./pages/university-search-results/university-search-results.component";
import { SearchUniversitiesComponent } from "./pages/search-universities/search-universities.component";
import { SearchUniversityPanelComponent } from "./components/search-university-panel/search-university-panel.component";
import { UniversitySearchFilterComponent } from "./components/university-search-filter/university-search-filter.component";
import { UniversityComponent } from "./components/university/university.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    UniversitySearchResultsComponent,
    SearchUniversitiesComponent,
    SearchUniversityPanelComponent,
    UniversitySearchFilterComponent,
    UniversityComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
