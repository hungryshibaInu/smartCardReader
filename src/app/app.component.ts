import { Component } from '@angular/core';
import { io } from "socket.io-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'smartCardReader';

  socket = io('http://localhost:3000');

  constructor() {
    this.socket.connect();
    console.log('connected');

    this.socket.emit('readCard');
    this.socket.on('reply', (data) => {
      console.log('received => ', data);
    });
  }

}
