import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SkillService } from './skill/skill.service';
import { skill } from './skill/skill.model';
import { SkillComponent } from './skill/skill.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-intro',
  imports: [NgFor, SkillComponent, RouterLink],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  standalone: true,
})
export class IntroComponent implements OnInit {
  name: string = 'Ícaro Machado de Carvalho';
  role: string = 'Desenvolvedor Full-Stack';

  skillsArray!: skill[];
  isVisible!: boolean;
  introElement!: Element | null;

  constructor(
    private service: SkillService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.skillsArray = this.service.getSkills();
  }
}
