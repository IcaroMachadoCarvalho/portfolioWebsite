import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectsInfo: Project[] = [
    {
      id: 1,
      status: 'Finalizado',
      name: 'Luregi Móveis planejados',
      isFeatured: true,
      longDescription: '...',
      shortDescription: 'Landing page para móveis planejados',
      imgProject: '../../assets/images/luregiProject.webp',
      urlDeploy: 'https://luregimoveisplanejados.netlify.app',
      languages: ['HTML', 'Tailwindcss', 'Javascript'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 2,
      status: 'Finalizado',
      name: 'Portfolio',
      isFeatured: true,
      longDescription: '...',
      shortDescription: 'Portfólio pessoal em Angular',
      imgProject: '../../assets/images/portfolioProject.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/portfolioWebsite',
      urlDeploy: '',
      languages: ['Angular', 'Typescript', 'SASS', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 3,
      status: 'Finalizado',
      name: 'toDoList',
      isFeatured: true,
      longDescription: '...',
      shortDescription: 'Lista de tarefas com TypeScript',
      imgProject: '../../assets/images/toDoListImg.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/toDoList',
      urlDeploy: 'https://to-do-list-lemon-beta-60.vercel.app/',
      languages: ['Typescript', 'HTML', 'SASS', 'Webpack', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 4,
      status: 'Finalizado',
      name: 'LinkTree Profile',
      longDescription: '...',
      shortDescription: 'Página de links estilo Linktree',
      imgProject: '../../assets/images/linktTreeImg.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/linkTreeProfile',
      urlDeploy: 'https://link-tree-profile.vercel.app/',
      languages: ['Tailwindcss', 'HTML', 'Javascript', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 5,
      status: 'Finalizado',
      name: 'Ecommerce Page',
      longDescription: '...',
      shortDescription: 'Página de ecommerce responsiva',
      imgProject: '../../assets/images/ecommercePageProject.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/EcommercePage',
      urlDeploy: 'https://ecommerce-page-nu.vercel.app/',
      languages: ['HTML', 'CSS', 'Javascript', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 6,
      status: 'Finalizado',
      name: 'IntroSection',
      longDescription: '...',
      shortDescription: 'Seção introdutória com dropdowns',
      imgProject: '../../assets/images/introSectionProject.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/introSection',
      urlDeploy: 'https://introsection-tau.vercel.app/',
      languages: ['HTML', 'CSS', 'Javascript', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 7,
      status: 'Finalizado',
      name: 'CultivaMais',
      longDescription: '...',
      shortDescription: 'App para agricultores com IA',
      imgProject: '../../assets/images/cultiva+Project.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/CultivaMais',
      urlDeploy: 'https://chatappfllw5.flutterflow.app',
      languages: ['FlutterFlow'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 8,
      status: 'Finalizado',
      name: 'Rating Component',
      longDescription: '...',
      shortDescription: 'Componente de avaliação (1–5)',
      imgProject: '../../assets/images/ratingComponentProject.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/RatingComponent',
      languages: ['HTML', 'CSS', 'Javascript', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 9,
      status: 'Finalizado',
      name: 'Jogo-PPT',
      longDescription: '...',
      shortDescription: 'Jogo Pedra, Papel e Tesoura',
      imgProject: '../../assets/images/jogoPPTProject.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/Jogo-PPT',
      languages: ['HTML', 'CSS', 'Javascript', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 10,
      status: 'Finalizado',
      name: 'MyCodes',
      longDescription: '...',
      shortDescription: 'Projeto simples em Python',
      imgProject: '../../assets/images/myCodesProject.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/MyCodes',
      languages: ['Python'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
  ];
  constructor() {}
  getContentProjects() {
    return this.projectsInfo;
  }

  getFeaturedProjects() {
    return this.projectsInfo.filter((item) => item.isFeatured === true);
  }

  getProjectById(id: number): Project | undefined {
    return this.projectsInfo.find((item) => item.id === id);
  }
}
