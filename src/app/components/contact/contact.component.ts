import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';
import { HttpClientModule } from '@angular/common/http';
import { ContatcForm } from '../../models/formContact';

@Component({
  selector: 'app-contatc',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  providers:[FormService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContatcComponent {
  formGroup: FormGroup; // Declaração do FormGroup

  constructor(private service:FormService) {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]), // Campo "Nome" com validação obrigatória
      email: new FormControl('', [Validators.required, Validators.email]), // Campo "Email" com validação obrigatória e de formato de email
      message: new FormControl('', [Validators.required]), // Campo "Mensagem" com validação obrigatória
    });
  }

 // onSubmit() {
    // Envia o formulário e trata o resultado (opcional)
  //  if (this.contatcForm.valid) {
      // O formulário é válido, faça algo com os dados
   //   console.log(this.contatcForm.value);
  //  } else {
      // O formulário é inválido, mostre erros de validação
   //   console.log('Formulário inválido!');
 //   }
 // }
  onSubmit(){
    const contatcForm: ContatcForm = { 
      name: this.formGroup.value.name,
      email: this.formGroup.value.email,
      message: this.formGroup.value.message 
    }
    console.log(contatcForm);

    if(this.formGroup.valid){
      this.service.sendData(contatcForm).subscribe({
        next: ()=>{
          this.formGroup.reset();
        }
      })
    }
  }


}
