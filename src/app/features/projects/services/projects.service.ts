import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { BehaviorSubject } from 'rxjs';

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
      longDescription:
        'O site da Luregi Móveis Planejados foi desenvolvido utilizando HTML, Tailwind CSS e JavaScript, com foco em design moderno, responsividade e performance. A aplicação foi estruturada para oferecer navegação intuitiva e otimizada, além de contar com boas práticas de SEO para melhorar a visibilidade nos mecanismos de busca e atrair novos clientes.',
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
      longDescription:
        'Este portfólio pessoal foi desenvolvido com Angular, priorizando performance, organização de código e escalabilidade. Possui design responsivo e interface moderna, permitindo a apresentação de projetos, habilidades e informações profissionais de forma clara e intuitiva. A aplicação utiliza boas práticas de arquitetura e componentização para garantir manutenção facilitada.',
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
      longDescription:
        'Aplicação de lista de tarefas desenvolvida com TypeScript, focada em organização e controle de estado. Permite adicionar, editar, concluir e remover tarefas, além de persistir os dados no localStorage. O projeto segue uma estrutura inspirada em aplicações Angular, reforçando conceitos de modularização e boas práticas.',
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
      longDescription:
        'Aplicação web inspirada no Linktree para centralização de links pessoais e profissionais. Desenvolvida com HTML, Tailwind CSS e JavaScript, possui design responsivo, animações suaves e foco em experiência do usuário. O layout foi pensado para facilitar o acesso rápido a informações e redes sociais.',
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
      longDescription:
        'Página de e-commerce desenvolvida com base em um desafio do Frontend Mentor. O projeto inclui funcionalidades como exibição de produtos, carrinho de compras e interação com o usuário. Foi construído com foco em responsividade, usabilidade e organização de layout.',
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
      longDescription:
        'Projeto de uma seção introdutória com navegação interativa, incluindo dropdowns e elementos dinâmicos. Desenvolvido com HTML, CSS e JavaScript, com foco em responsividade e experiência do usuário.',
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
      longDescription:
        'Aplicação desenvolvida com FlutterFlow com o objetivo de auxiliar agricultores familiares. Utiliza conceitos de inteligência artificial para fornecer suporte na gestão e produtividade agrícola, com foco em acessibilidade e inclusão digital.',
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
      longDescription:
        'Componente interativo de avaliação que permite ao usuário selecionar uma nota e visualizar o feedback correspondente. Desenvolvido com HTML, CSS e JavaScript, com foco em manipulação de DOM e interatividade.',
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
      longDescription:
        'Implementação do jogo Pedra, Papel e Tesoura utilizando HTML, CSS e JavaScript. Projeto focado na prática de lógica de programação e manipulação de eventos, com interface simples voltada para desktop.',
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
      longDescription:
        'Projeto acadêmico desenvolvido em Python com o objetivo de praticar lógica de programação e conceitos fundamentais da linguagem. Inclui implementações simples voltadas ao aprendizado.',
      shortDescription: 'Projeto simples em Python',
      imgProject: '../../assets/images/myCodesProject.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/MyCodes',
      languages: ['Python'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
  ];

  private isOpen = new BehaviorSubject<boolean>(false);
  private selectedProject = new BehaviorSubject<Project | null>(null);
  isOpen$ = this.isOpen.asObservable();
  selectedProject$ = this.selectedProject.asObservable();

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

  openModal(project: Project) {
    this.selectedProject.next(project);
    this.isOpen.next(true);
    document.body.style.overflowY = 'hidden';
  }

  closeModal() {
    this.isOpen.next(false);
    document.body.style.overflowY = 'auto';
  }
}
