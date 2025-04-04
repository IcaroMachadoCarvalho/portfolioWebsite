import {
  AfterViewInit,
  Component,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { shownStateTrigger } from '../../animations';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  animations:[shownStateTrigger],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email:string = "icarocarvalho028@gmail.com";
  isVisible!: boolean;
  contactElement!: Element | null;

  constructor(private cdr: ChangeDetectorRef){}

  copyEmail() {
    // Usando a API Clipboard moderna
    navigator.clipboard.writeText(this.email).then(() => {
      alert('E-mail copiado'); // Exibe o alerta após o e-mail ser copiado
    }).catch((err) => {
      console.error('Erro ao copiar o e-mail: ', err);
      alert('Falha ao copiar o e-mail');
    });
  }
  ngAfterViewInit(): void {
      this.contactElement = document.querySelector('#contact');
      if (this.contactElement) {
        this.detectScroll();
      }
    }

    @HostListener('window:scroll')
    onWindowScroll(): void {
      this.detectScroll();
    }

    detectScroll(): void {
      if (this.contactElement) {
        const rect = this.contactElement.getBoundingClientRect();

        // Verifica se o elemento está visível
        this.isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        // Força a detecção de mudanças para evitar o erro por não ser feito pelo angular
        this.cdr.detectChanges();
      }
    }
}
