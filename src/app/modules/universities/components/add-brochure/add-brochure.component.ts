import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-add-brochure",
  templateUrl: "./add-brochure.component.html",
  styleUrls: ["./add-brochure.component.scss"],
})
export class AddBrochureComponent implements OnInit {
  constructor(private activeModel: NgbActiveModal) {}

  ngOnInit() {}
  onClose() {
    this.activeModel.dismiss();
  }

  onFileInput(): void {}
}
