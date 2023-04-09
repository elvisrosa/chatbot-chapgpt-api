import { Component, OnInit } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConsumoapiService } from '../../servicios/consumoapi.service';
import { CommonModule } from '@angular/common';

export class textResponse{
  sno:number=1;
  text:string='';
  response:any='';
}

@Component({
  selector: 'app-chapgpt',
  templateUrl: './chapgpt.component.html',
  styleUrls: ['./chapgpt.component.scss'],
  standalone:true,
  imports: [IonicModule, FormsModule, CommonModule]

})
export class ChapgptComponent{

  textList:textResponse[]=[{sno:1,text:'',response:''}];

  constructor(private servicio:ConsumoapiService) { }

  
   enviarMensaje(data:textResponse){
    try {
      this.servicio.generarText(data.text).then(text=>{
        data.response=text;
        if(this.textList.length===data.sno){
          this.textList.push({sno:1,text:'',response:''});
        }
      });
    } catch (error) {
      console.log('erorr', error)
    }    
  }

  limpiar(){
    location.reload;
  }
  

}
