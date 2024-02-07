import { Injectable } from '@angular/core';
import { ipcRenderer } from 'electron';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SmartCardReaderService {
  socket = io('http://localhost:3000');

  constructor() {

  }

  sendDataToElectron() {
    const dataToSend = {
      message: 'Hello Electron!',
    };

    this.socket.emit('sendData', dataToSend);
    console.log('Data sent to Electron:', dataToSend);
  }
}
