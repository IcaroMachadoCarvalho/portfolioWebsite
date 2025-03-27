import { Injectable } from '@angular/core';
import {skill} from '../models/skill'


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills:skill[] = [
    {
      imgLink: "../../assets/images/angular-original.svg",
      techName: "Angular"
    },
    {
      imgLink: "../../assets/images/typescript-plain.svg",
      techName: "Typescript"
    },
    {
      imgLink: "../../assets/images/tailwindcss-original.svg",
      techName: "Tailwind"
    },
    {
      imgLink: "../../assets/images/sass-original.svg",
      techName: "Sass"
    },
    {
      imgLink: "../../assets/images/javascript-original.svg",
      techName: "Javascript"
    },
    {
      imgLink: "../../assets/images/html5-original.svg",
      techName: "HTML"
    },
    {
      imgLink: "../../assets/images/css3-plain.svg",
      techName: "CSS"
    },
    {
      imgLink: "../../assets/images/react-original.svg",
      techName: "React"
    }
  ]

  constructor() { }

  getSkills(){
    return this.skills;
  }
}
