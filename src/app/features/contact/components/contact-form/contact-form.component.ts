import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
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
        },
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
        },
      );
  }
}
