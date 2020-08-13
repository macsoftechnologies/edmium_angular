import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-course-curriculum",
  templateUrl: "./course-curriculum.component.html",
  styleUrls: ["./course-curriculum.component.scss"],
})
export class CourseCurriculumComponent implements OnInit {
  constructor(private activeModel: NgbActiveModal) {}

  ngOnInit() {}

  onClose() {
    this.activeModel.dismiss();
  }
}
