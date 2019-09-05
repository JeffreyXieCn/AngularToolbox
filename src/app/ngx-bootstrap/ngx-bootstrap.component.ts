import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponentComponent } from './modal-component/modal-component.component';

@Component({
  selector: 'app-ngx-bootstrap',
  templateUrl: './ngx-bootstrap.component.html',
  styleUrls: ['./ngx-bootstrap.component.css']
})
export class NgxBootstrapComponent implements OnInit {
  modalRef: BsModalRef;
  message: string;

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  openModalWithComponent() {
    const initialState = {
      list: ['Open a modal with component', 'Pass your data', 'Do something else', '...'],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ModalComponentComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
