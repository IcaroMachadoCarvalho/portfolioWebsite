import { Injectable } from '@angular/core';
import { skill } from './skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  skills: skill[] = [
    {
      techName: 'ANGULAR',
    },
    {
      techName: 'JAVA',
    },
    {
      techName: 'SPRING BOOT',
    },
    {
      techName: 'NODE.JS',
    },
    {
      techName: 'TYPESCRIPT',
    },
    {
      techName: 'DOCKER',
    },
  ];

  constructor() {}

  getSkills() {
    return this.skills;
  }
}
