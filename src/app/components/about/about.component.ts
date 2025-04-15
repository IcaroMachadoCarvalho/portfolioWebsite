import { NgClass, NgSwitch, NgSwitchCase } from '@angular/common';
import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutService } from '../../services/about.service';
import { shownStateTrigger } from '../../animations';

@Component({
  selector: 'app-about',
  imports: [NgClass, NgSwitch, NgSwitchCase, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [shownStateTrigger],
  standalone: true,
})
export class AboutComponent implements OnInit {
  isOpen: boolean = false;
  optionChoosed: string = 'mim';
  textContent: any[] = [];
  isVisible!: boolean;
  aboutElement!: Element | null;

  constructor(private service: AboutService, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.textContent = this.service.getAboutContent();
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

  getContentSection(postion: number) {
    return this.textContent[postion];
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
}
