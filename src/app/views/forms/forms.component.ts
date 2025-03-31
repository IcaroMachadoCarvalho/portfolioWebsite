import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';  // Correção na importação

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'], 
  standalone: true,  // Definindo o componente como standalone
})
export class FormsComponent {
  forms: FormGroup;

  constructor(private fb: FormBuilder) {
    // Usando o FormBuilder para criar o FormGroup com validadores
    this.forms = this.fb.group({
      nome: ['', [Validators.required]],  // Validador de 'required'
      email: ['', [Validators.email]],  // Validador de 'email'
      mensagem: ['', [Validators.minLength(10)]]  // Validador de 'minLength'
    });
  }

  // Função para enviar a mensagem
  sendMessage() {
    if (this.forms.valid) {
      console.log(this.forms.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
