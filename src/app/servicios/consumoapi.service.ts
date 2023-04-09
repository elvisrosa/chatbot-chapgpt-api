import { Injectable, OnInit } from '@angular/core';
import { OpenAIApi, Configuration } from 'openai';
import { environment } from '../../environments/environment';
import { from, filter, map } from 'rxjs';
import  axios  from 'axios'

const api_key = environment.apikey;

@Injectable({
  providedIn: 'root'
})

export class ConsumoapiService implements OnInit {

  private openai!:OpenAIApi;
  //private apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

  readonly configuration = new Configuration({
    apiKey:api_key
  });

  constructor() { 
    this.openai = new OpenAIApi(this.configuration);
    const resp = this.openai.listEngines();
    console.log('resp', resp);
  }
  ngOnInit(): void {
    this.openai = new OpenAIApi(this.configuration);
    const resp = this.openai.listEngines();
    console.log('resp', resp);
  }

  generarText(texto:string){
    return this.openai.createCompletion({
      model: "text-davinci-003",
      prompt:texto,
      max_tokens:256,
      temperature:0.5
    }).then(resp=>{
      return resp.data.choices[0].text;
    }).catch(error=>{
      console.log(error);
      return error;
    });
  }

  
  generarTextttt(texto:string){
    from(this.openai.createCompletion({
      model:'text-davinci-003',
      prompt:texto,
      max_tokens:256,
      temperature:0.7
    })).pipe(
      filter(resp=>!!resp && !!resp.data),
      map(resp=>resp.data),
      filter((data:any)=>(
        data.choices && data.choices.length>0 &&
        data.choices[0].text
      )),
      map(data=>data.choices[0].text)
    ).subscribe(data=>{
      console.log(data);
    })
  }
}
    
  

   /* async getResponse(prompt: string): Promise<string> {
      const data = {
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      };
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.apikey}`
      };
  
      try {
        const response = await axios.post(this.apiUrl, data, { headers: headers });
        console.log(response.data.choices[0].text)
        return response.data.choices[0].text;
      } catch (error) {
        console.error(error);
        return '';
      }}
      */
  
  
  
  
  
  
