
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContatcResponse } from '../components/interfaces/contatc.interface';
import { ContatcForm } from '../models/formContact';



@Injectable({
  providedIn: 'root'
})
export class FormService {

  private endpointUrl ='https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) { }

  sendData(name: string,email:string):Observable<ContatcResponse>{
    const data: ContatcForm = {name,email};

    const response= this.http.post<ContatcResponse>(this.endpointUrl,data);
    console.log(response);
    return response

  }


}
