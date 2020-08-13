import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-add-event",
  templateUrl: "./add-event.component.html",
  styleUrls: ["./add-event.component.scss"],
})
export class AddEventComponent implements OnInit {
  constructor(private activeModel: NgbActiveModal) {}

  ngOnInit() {}
  onClose() {
    this.activeModel.dismiss();
  }
}
