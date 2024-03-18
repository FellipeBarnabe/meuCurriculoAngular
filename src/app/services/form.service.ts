
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContatcResponse } from '../models/contatc.interface';
import { ContatcForm } from '../models/formContact';



@Injectable({
  providedIn: 'root'
})
export class FormService {

  private endpointUrl = 'http://127.0.0.1:5000/processaFormulario'

  constructor(private http: HttpClient) { }

  sendData(contatcForm: ContatcForm): Observable<ContatcResponse> {

    const response = this.http.post<ContatcResponse>(this.endpointUrl, contatcForm);
    console.log(response);
    return response

  }


}
