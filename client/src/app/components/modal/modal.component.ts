import { ModalService } from './modal.service';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }
  @Output() closeHit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() openModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() headingModalShow: boolean = true;
  @Input() headingModal: string = "";
  @Input() showButtonX: boolean = true;
  @Input() id : any

  public idObj: any = {}
  public modalOpen: any = false
  cancelModal(){
    this.modalOpen = !this.modalOpen
    delete this.idObj[this.id]
  }

  @HostListener('window:click', ['$event']) clickDefault(event: any) {
    event.stopPropagation()
  }

  clickOpenModal(){
    this.modalService.changeOpenModal.subscribe((data:any) => {
      this.modalOpen = data
    })

    this.modalService.idOpenModal.subscribe((data:any) => {
      let id = {id:this.modalOpen}
      this.idObj[data] = id
    })

    this.modalService.changeModalX.subscribe((data:any) => {
      if(this.idObj[this.id]){
        this.idObj[this.id].x = data
      }
    })
  }

  ngOnInit(): void {
  }

}
