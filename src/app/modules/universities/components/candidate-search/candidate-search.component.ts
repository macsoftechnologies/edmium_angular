import { Component, OnInit } from "@angular/core";
import { NgModel } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CandidateProfileComponent } from "../candidate-profile/candidate-profile.component";

@Component({
  selector: "app-candidate-search",
  templateUrl: "./candidate-search.component.html",
  styleUrls: ["./candidate-search.component.scss"],
})
export class CandidateSearchComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  public openCandidateProfile(): void {
    this.modalService.dismissAll();
    this.modalService.open(CandidateProfileComponent, { size: "lg" });
  }
}
