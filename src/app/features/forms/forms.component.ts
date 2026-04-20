import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms'; // Correção na importação
import { RouterLink } from '@angular/router';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule, RouterLink, NgClass, NgIf],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  standalone: true,
})
export class FormsComponent {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Usando o FormBuilder para criar o FormGroup com validadores
    this.form = this.formBuilder.group({
      nome: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      mensagem: ['', [Validators.minLength(10), Validators.required]],
    });
    window.scrollTo(0, 0);
  }

  // Função para enviar a mensagem
  sendMessage() {
    // Depedência que envia email
    emailjs
      .send(
        'service_xxxov6c',
        'template_io4amk7',
        { ...this.form.value },
        {
          publicKey: 'cNUlVCf8VjDhh9SuI',
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Enviado com sucesso!');
          this.form.reset();
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          alert('Erro no envio! Tente novamente');
        }
      );
  }
}
