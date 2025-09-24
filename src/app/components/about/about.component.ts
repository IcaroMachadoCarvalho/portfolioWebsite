import {
  NgClass,
  NgFor,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
} from '@angular/common';
import {
  Component,
  HostListener,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutService } from '../../services/about.service';
import { shownStateTrigger } from '../../animations';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-about',
  imports: [NgFor, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    shownStateTrigger,
    trigger('accordionState', [
      state(
        'closed',
        style({
          opacity: 0,
          height: '0px',
          padding: '0',
          overflow: 'hidden',
        })
      ),
      state(
        'open',
        style({
          opacity: 1,
          height: '*', // altura automática
          padding: '10px',
          overflow: 'hidden',
        })
      ),
      transition('closed <=> open', [animate('0.3s ease-in-out')]),
    ]),
  ],
  standalone: true,
})
export class AboutComponent implements OnInit {
  isOpen: boolean = false;
  optionChoosed: string = 'mim';
  textContent: any[] = [];
  isVisible!: boolean;
  activeIndex: number = 0;
  aboutElement!: Element | null;

  accordionItems: any = [];
  // accordionItems = [
  //   { title: 'Mim', content: 'Conteúdo da Seção 1.' },
  //   { title: 'Experiências profissionais', content: 'Conteúdo da Seção 2.' },
  //   { title: 'Formação', content: 'Conteúdo da Seção 3.' },
  // ];

  constructor(private service: AboutService, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.textContent = this.service.getAboutContent();
    this.accordionItems = this.service.getAboutContent();
  }
  ngAfterViewInit(): void {
    this.aboutElement = document.querySelector('#about');
    if (this.aboutElement) {
      this.detectScroll();
    }
  }
  openOverlay() {
    this.isOpen = true;
  }

  closeOverlay() {
    this.isOpen = false;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.detectScroll();
  }

  detectScroll(): void {
    if (this.aboutElement) {
      const rect = this.aboutElement.getBoundingClientRect();

      // Verifica se o elemento está visível
      this.isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      // Força a detecção de mudanças para evitar o erro por não ser feito pelo angular
      this.cdr.detectChanges();
    }
  }

  toggleAccordion(index: number): void {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }

  isActive(index: number): boolean {
    return this.activeIndex === index;
  }
}
