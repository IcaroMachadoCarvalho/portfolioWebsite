import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';  // Correção na importação
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forms',
  imports:[ReactiveFormsModule, RouterLink, NgClass, NgIf], // importa módulos necessários para o funcionamento
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  standalone: true,
})
export class FormsComponent {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Usando o FormBuilder para criar o FormGroup com validadores
    this.form = this.formBuilder.group({
      nome: ['', [Validators.minLength(3),Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      mensagem: ['', [Validators.minLength(10), Validators.required]]
    });
    window.scrollTo(0,0);
  }

  // Função para enviar a mensagem
  sendMessage() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
      alert("Enviado com sucesso")
    } else {
      console.log('Formulário inválido');
    }
  }
}
