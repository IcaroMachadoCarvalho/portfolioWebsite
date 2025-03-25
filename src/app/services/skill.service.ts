import { Injectable } from '@angular/core';
import {skill} from '../models/skill'


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills:skill[] = [
    {
      imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
      techName: "Angular"
    },
    {
      imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      techName: "Typescript"
    },
    {
      imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      techName: "Tailwind"
    },
    {
      imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
      techName: "Sass"
    },
    {
      imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      techName: "Javascript"
    },
    {
      imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      techName: "HTML"
    },
    {
      imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      techName: "CSS"
    },
    {
      imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      techName: "React"
    }
  ]

  constructor() { }

  getSkills(){
    return this.skills;
  }
}
