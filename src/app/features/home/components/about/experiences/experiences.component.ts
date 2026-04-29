import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-experiences',
  imports: [NgFor, NgClass],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  isVisible: boolean = false;
  offset: number = 120;
  experiencesData: any = [
    {
      id: 1,
      role: 'Desenvolvedor Wordpress',
      company: 'Hotelwww',
      date: 'Jun 2025 — Presente',
      description: [
        'Desenvolvimento e manutenção de sites institucionais com foco em arquitetura responsiva e performance.',
        'Implementação de melhorias de usabilidade e otimizações de SEO para aumentar a visibilidade digital.',
        'Gestão técnica de ambientes de hospedagem, plugins e ajustes diretos via FTP.',
      ],
    },
    {
      id: 2,
      role: 'Estagiário',
      company: 'INSS',
      date: 'Nov 2023 — Set 2024',
      description: [
        'Suporte técnico e administrativo no processamento de fluxos documentais complexos.',
        'Desenvolvimento de habilidades em resolução de problemas sob pressão e comunicação assertiva com o público.',
        'Análise rigorosa de documentação para garantir a integridade dos processos administrativos.',
      ],
    },
  ];

  @ViewChild('experiencesElement') elemento!: ElementRef;

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
