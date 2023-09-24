import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor() { }
  public idOpenModal: EventEmitter<any> = new EventEmitter();
  public changeOpenModal: EventEmitter<any> = new EventEmitter();
  public changeModalX: EventEmitter<any> = new EventEmitter();
  public opened:boolean = false;

  public changeShowX(x:any){
    this.changeModalX.emit(x);
  }

  public changeOpen(id: any, open:any, ) {
    if(id){
      this.changeOpenModal.emit(open);
      this.idOpenModal.emit(id);
    }
  }
}
