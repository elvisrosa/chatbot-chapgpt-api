import { Component, OnInit } from '@angular/core';
import { ConsumoapiService } from '../../servicios/consumoapi.service';

@Component({
  selector: 'app-chatbot1',
  templateUrl: './chatbot1.component.html',
  styleUrls: ['./chatbot1.component.scss'],
})
export class Chatbot1Component implements OnInit{

  public chatHistory: { user: string, bot: string }[] = [];
  public userMessage = 'hola como estas ?';

  constructor(private servicio:ConsumoapiService) { }
  ngOnInit(): void {
    this.sendMessage();
  }

  public async sendMessage(): Promise<void> {
    if (this.userMessage.trim() !== '') {
      this.chatHistory.push({ user: this.userMessage, bot: 'Loading...' });
      const response = await this.servicio.getResponse(this.userMessage);
      this.chatHistory[this.chatHistory.length - 1].bot = response;
      console.log(response)
      this.userMessage = '';
    }
  }

}
