import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: true,
})
export class ContactComponent {
  email: string = 'icarocarvalho028@gmail.com';
  isVisible: boolean = false;
  offset: number = 100;

  @ViewChild('ctoElement') elemento!: ElementRef;

  constructor() {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.detectScroll();
  }

  detectScroll(): void {
    if (this.isVisible) return;

    const rect = this.elemento.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight - this.offset) {
      this.isVisible = true;
    }
  }
}
