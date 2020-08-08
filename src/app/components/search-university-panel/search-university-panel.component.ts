import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-university-panel",
  templateUrl: "./search-university-panel.component.html",
  styleUrls: ["./search-university-panel.component.scss"],
})
export class SearchUniversityPanelComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onNavigateToStudentDashboard() {
    console.log("click on search");
    this.router.navigateByUrl("student/dashboard");
  }
}
