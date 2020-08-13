import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-candidate-profile",
  templateUrl: "./candidate-profile.component.html",
  styleUrls: ["./candidate-profile.component.scss"],
})
export class CandidateProfileComponent implements OnInit {
  constructor(private activeModel: NgbActiveModal) {}

  ngOnInit() {}

  onClose() {
    this.activeModel.dismiss();
  }
}
