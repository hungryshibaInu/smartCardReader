import { Component } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'smartCardReader';
  data: any;

  socket: any;

  constructor() {}

  async startCardReader() {
    this.socket = io('http://localhost:3000');
    
    this.socket.connect();
    console.log('connected');

    this.socket.emit('readCard');

    this.socket.on('reply', (data: any) => {
      console.log('received => ', data);
      this.data = data;
    });
  }
}
