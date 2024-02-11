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
}
