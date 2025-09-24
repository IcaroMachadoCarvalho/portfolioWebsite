import { Component, HostListener, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgClass, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;
  isScrolled: boolean = false;

  ngOnInit(): void {
    if (window.innerWidth >= 767) {
      this.isMenuOpen = true;
    }
  }

  @HostListener('window:resize') onResize() {
    if (window.innerWidth >= 767) {
      this.isMenuOpen = true;
      return;
    }
    this.isMenuOpen = false;
  }

  toggleTab() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    // Adiciona a classe "scrolled" se a rolagem for maior que 50px
    this.isScrolled = window.scrollY > 15;
  }

  closeNav() {
    if (window.innerWidth < 767) {
      this.isMenuOpen = false;
    }
  }
}
