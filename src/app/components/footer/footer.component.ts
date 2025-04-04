import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { shownStateTrigger } from '../../animations';

@Component({
  selector: 'app-footer',
  imports: [],
  animations:[shownStateTrigger],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone:true
})
export class FooterComponent {
  isVisible!: boolean;
  footerElement!: Element | null;

  constructor(private cdr: ChangeDetectorRef){}
  
  getDate(){
    return  "@"+ new Date().getFullYear();
  }

  ngAfterViewInit(): void {
      this.footerElement = document.querySelector('#footer');
      if (this.footerElement) {
        this.detectScroll();
      }
    }

    @HostListener('window:scroll')
    onWindowScroll(): void {
      this.detectScroll();
    }

    detectScroll(): void {
      if (this.footerElement) {
        const rect = this.footerElement.getBoundingClientRect();

        // Verifica se o elemento está visível
        this.isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        // Força a detecção de mudanças para evitar o erro por não ser feito pelo angular
        this.cdr.detectChanges();
      }
    }
}
