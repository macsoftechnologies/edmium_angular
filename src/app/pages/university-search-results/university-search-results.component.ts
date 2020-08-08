import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-university-search-results",
  templateUrl: "./university-search-results.component.html",
  styleUrls: ["./university-search-results.component.scss"],
})
export class UniversitySearchResultsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
