import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ContatcForm } from '../../models/formContact';
import { FormService } from '../../services/form.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contatc',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  providers: [FormService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContatcComponent implements OnInit {
  myForm: FormGroup = new FormGroup({}); // Declaração do FormGroup
  
  constructor(private service: FormService) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required), // Campo "Nome" com validação obrigatória
      email: new FormControl('', [Validators.required, Validators.email]), // Campo "Email" com validação obrigatória e de formato de email
      message: new FormControl('', Validators.required), // Campo "Mensagem" com validação obrigatória
    });
  }

  onSubmit() {
    const contatcForm: ContatcForm = {
      name: this.myForm.value.name,
      email: this.myForm.value.email,
      message: this.myForm.value.message,
    };

    if (this.myForm.valid) {
      this.service.sendData(contatcForm).subscribe({
        next: () => {
          this.myForm.reset();
          alert("TODO: melhorar a resposta da API.")
        },

        error: (err) => console.error(err),
      });
    }
  }
}
