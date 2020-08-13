import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-add-internal-counselor-training",
  templateUrl: "./add-internal-counselor-training.component.html",
  styleUrls: ["./add-internal-counselor-training.component.scss"],
})
export class AddInternalCounselorTrainingComponent implements OnInit {
  constructor(private activeModel: NgbActiveModal) {}

  ngOnInit() {}

  onClose() {
    this.activeModel.dismiss();
  }

  onFileInput(): void {}
}
