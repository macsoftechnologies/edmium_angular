import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddScholarshipComponent } from "../add-scholarship/add-scholarship.component";
import { AddInternalCounselorTrainingComponent } from "../add-internal-counselor-training/add-internal-counselor-training.component";
import { CourseCurriculumComponent } from "../course-curriculum/course-curriculum.component";
import { AddBrochureComponent } from "../add-brochure/add-brochure.component";
import { AddEventComponent } from "../add-event/add-event.component";

@Component({
  selector: "app-upload-information",
  templateUrl: "./upload-information.component.html",
  styleUrls: ["./upload-information.component.scss"],
})
export class UploadInformationComponent implements OnInit {
  isModal: boolean = false;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  scrollToEle(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
    el.scrollTo(0, 10);
  }

  onPopUpModal() {
    this.isModal = !this.isModal;
  }
  onCloseModal() {
    this.onPopUpModal();
  }

  /* Add Scholarship button click handler */
  addScholarship() {
    this.modalService.open(AddScholarshipComponent, {
      size:"lg"      
      });
  }
  /* Add Brochres button click handler */
  addBrochures() {
    this.modalService.open(AddBrochureComponent);
  }
  /* Add Events button click handler */
  addEvents() {
    this.modalService.open(AddEventComponent, {
      size:"lg"      
      });
  }
  /* Add InternalCounselorTraining button click handler */
  addTraining() {
    this.modalService.open(AddInternalCounselorTrainingComponent);
  }
  /* Add Course Curriculum button click handler */
  addCourseCurriculum() {
    this.modalService.open(CourseCurriculumComponent, {
      size:"lg"      
      });
  }
}
