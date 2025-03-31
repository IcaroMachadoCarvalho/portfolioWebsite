import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email:string = "icarocarvalho028@gmail.com";

  copyEmail() {
    // Usando a API Clipboard moderna
    navigator.clipboard.writeText(this.email).then(() => {
      alert('E-mail copiado'); // Exibe o alerta após o e-mail ser copiado
    }).catch((err) => {
      console.error('Erro ao copiar o e-mail: ', err);
      alert('Falha ao copiar o e-mail');
    });
  }
}
