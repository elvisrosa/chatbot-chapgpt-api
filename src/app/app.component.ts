import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ChapgptComponent } from './componentes/chapgpt/chapgpt.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class AppComponent {
  constructor() {}
}
