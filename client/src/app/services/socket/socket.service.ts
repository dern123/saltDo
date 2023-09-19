import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any
  readonly url: string = environment.production ? "http://localhost:5000" : "http://localhost:5000"

  constructor() {
    this.socket = io(this.url)
    // this.socket.on('connect', () => {
    //   console.log('Сокет успішно підключено до сервера');
    // });
    // this.socket.on('disconnect', () => {
    //   console.log('Сокет відключено від сервера');
    // });
  }

  // listen(eventName: string) {
  //   return new Observable((subscriber) => {
  //     this.socket.on(eventName, (data: any) => {
  //       subscriber.next(data)
  //     })
  //   })
  // }

  // emit(eventName: string, data: any) {
  //   this.socket.emit(eventName, data)
  // }

}
