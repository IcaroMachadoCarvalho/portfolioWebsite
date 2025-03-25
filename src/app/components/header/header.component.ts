import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  isScrolled:boolean = false;
  openTab(){
    this.isMenuOpen = true;
  }
  closeTab(){
    this.isMenuOpen = false;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Adiciona a classe "scrolled" se a rolagem for maior que 50px
    this.isScrolled = window.scrollY > 50;
  }
}
