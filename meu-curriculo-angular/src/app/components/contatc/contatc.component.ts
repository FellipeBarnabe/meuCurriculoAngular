import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatc',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contatc.component.html',
  styleUrls: ['./contatc.component.css']
})
export class ContatcComponent {
  contatcForm!: FormGroup; // Declaração do FormGroup

  constructor() {
    this.contatcForm = new FormGroup({
      nome: new FormControl('', [Validators.required]), // Campo "Nome" com validação obrigatória
      email: new FormControl('', [Validators.required, Validators.email]), // Campo "Email" com validação obrigatória e de formato de email
      mensagem: new FormControl('', [Validators.required]), // Campo "Mensagem" com validação obrigatória
    });
  }

  onSubmit() {
    // Envia o formulário e trata o resultado (opcional)
    if (this.contatcForm.valid) {
      // O formulário é válido, faça algo com os dados
      console.log(this.contatcForm.value);
    } else {
      // O formulário é inválido, mostre erros de validação
      console.log('Formulário inválido!');
    }
  }
}
