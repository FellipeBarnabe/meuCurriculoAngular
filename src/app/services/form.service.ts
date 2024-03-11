
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  private endpointUrl ='https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) { }

  sendData(name: string,email:string):Observable<contatcResponse>{
    const data = {name,email};

    return this.http.post<contatcResponse>(this.endpointUrl,data);
  }


}
