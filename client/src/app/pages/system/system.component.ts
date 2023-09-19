import { SocketService } from './../../services/socket/socket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  constructor(private webSocketService: SocketService) { }

  ngOnInit(): void {
  }

}
