import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-information',
  templateUrl: './upload-information.component.html',
  styleUrls: ['./upload-information.component.scss']
})
export class UploadInformationComponent implements OnInit {
  isModal: boolean = false;
  constructor() { }

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
