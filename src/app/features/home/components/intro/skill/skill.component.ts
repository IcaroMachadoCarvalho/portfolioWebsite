import { Component, Input } from '@angular/core';
import { skill } from './skill.model';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  standalone: true,
})
export class SkillComponent {
  @Input() info: skill = {
    imgLink: '',
    techName: '',
  };
}
