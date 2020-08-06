import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-student-dashboard",
  templateUrl: "./student-dashboard.component.html",
  styleUrls: ["./student-dashboard.component.scss"],
})
export class StudentDashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onNavigateToUniversityList() {
    this.router.navigateByUrl("student/universities");
  }

  /* Navigate to profile */
  onNavigateToProfile() {
    this.router.navigateByUrl("student/profile");
  }
}
