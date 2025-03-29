import { Injectable } from '@angular/core';
import { project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectsInfo: project[] = [
    {
      id: 1,
      name: 'Luregi Móveis planejados',
      description: 'Esse projeto consiste em AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlDeploy: 'https://luregimoveisplanejados.netlify.app/',
      languages: ['HTML', 'Tailwindcss', 'Javascript'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 2,
      name: 'LinkTree Profile',
      description: 'linkTreeProfile é um site pessoal que centraliza os principais links de forma prática e visualmente atraente. Realizando uma breve apresentação minha, além de links para o portfólio, GitHub, currículo e redes sociais. O design é responsivo, adaptando-se a diferentes dispositivos, e conta com animações suaves e efeitos de transição para uma experiência interativa. O site utiliza o Tailwind CSS para um layout moderno e otimizado.',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/linkTreeProfile',
      urlDeploy: 'https://link-tree-profile.vercel.app/',
      languages: ['HTML', 'CSS', 'Javascript', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 3,
      name: 'EcommercePage',
      description: 'Esse projeto consiste em AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/EcommercePage',
      urlDeploy: 'https://ecommerce-page-nu.vercel.app/',
      languages: ['HTML', 'CSS', 'Javascript', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 4,
      name: 'IntroSection',
      description: 'Esse projeto consiste em AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/introSection',
      urlDeploy: 'https://introsection-tau.vercel.app/',
      languages: ['HTML', 'CSS', 'Javascript', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 5,
      name: 'Meu portfolio',
      description: 'Esse projeto consiste em AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/portfolioWebsite',
      urlDeploy: '',
      languages: ['Angular', 'Typescript', 'SASS', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 6,
      name: 'CultivaMais',
      description: 'Esse projeto consiste em AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/CultivaMais',
      urlDeploy: 'https://chatappfllw5.flutterflow.app',
      languages: ['FlutterFlow'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 7,
      name: 'RatingComponent',
      description: 'Esse projeto consiste em AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/RatingComponent',
      languages: ['HTML', 'CSS', 'Javascript', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 8,
      name: 'Jogo-PPT',
      description: 'Esse projeto consiste em AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/Jogo-PPT',
      languages: ['HTML', 'CSS', 'Javascript', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 9,
      name: 'MyCodes',
      description: 'Esse projeto consiste em AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/MyCodes',
      languages: ['Python'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 10,
      name: 'toDoList',
      description: 'Esse projeto consiste em AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/username/todolist',  // URL de exemplo
      urlDeploy: 'https://todolist.vercel.app/',  // URL de exemplo
      languages: ['Typescript', 'HTML', 'CSS', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 11,
      name: 'Multinews',
      description: 'Esse projeto consiste em AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/username/multinews',  // URL de exemplo
      urlDeploy: 'https://multinews.vercel.app/',  // URL de exemplo
      languages: ['React', 'SASS', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
  ];

  constructor() {}
  getContentProjects() {
    return this.projectsInfo;
  }

  getProjectById(id:number): project | undefined{
    return this.projectsInfo.find(item => item.id === id);
  }
}
