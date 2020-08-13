import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-add-scholarship",
  templateUrl: "./add-scholarship.component.html",
  styleUrls: ["./add-scholarship.component.scss"],
})
export class AddScholarshipComponent implements OnInit {
  constructor(private activeModel: NgbActiveModal) {}

  ngOnInit() {}

  onClose() {
    this.activeModel.dismiss();
  }
}
