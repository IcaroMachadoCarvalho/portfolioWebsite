import { Component, OnInit, AfterViewInit} from '@angular/core';
import { SkillService } from './../../services/skill.service';
import { skill } from '../../models/skill';
import { SkillComponent } from './skill/skill.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-intro',
  imports: [NgFor, SkillComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent implements OnInit{
  name:string = "Ícaro Machado de Carvalho";
  role:string = "Desenvolvedor Full-Stack";
  skillsArray!:skill[];
  constructor(private service: SkillService){}

  ngOnInit(): void {
    this.skillsArray = this.service.getSkills();
  }
}
