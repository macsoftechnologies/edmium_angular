import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-student-profile",
  templateUrl: "./student-profile.component.html",
  styleUrls: ["./student-profile.component.scss"],
})
export class StudentProfileComponent implements OnInit {
  isModal: boolean = false;
  constructor() {}

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
}
