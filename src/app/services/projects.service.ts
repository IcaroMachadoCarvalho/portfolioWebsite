import { Injectable } from '@angular/core';
import { project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectsInfo: project[] = [
    {
      id: 1,
      status: 'Finalizado',
      name: 'Luregi Móveis planejados',
      longDescription:
        'O site da Luregi Móveis Planejados foi desenvolvido com HTML, Tailwind CSS e JavaScript, garantindo um design moderno e responsivo. Com otimizações de SEO, o projeto oferece uma navegação eficiente, além de facilitar a busca e atrair novos clientes para a empresa.',
      shortDescription:
        'Luregi Móveis Planejados oferece soluções personalizadas em móveis sob medida, com design moderno e funcional.',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlDeploy: 'https://luregimoveisplanejados.netlify.app',
      languages: ['HTML', 'Tailwindcss', 'Javascript'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 2,
      status: 'Finalizado',
      name: 'LinkTree Profile',
      longDescription:
        'O projeto "linkTreeProfile" é um site pessoal que organiza links de forma eficiente e visualmente atraente. Ele inclui links para portfólio, GitHub, redes sociais e currículo, além de uma apresentação simples sobre o desenvolvedor. O design é responsivo, se adaptando automaticamente a diferentes dispositivos. O layout moderno e otimizado é construído com o uso de Tailwind CSS, enquanto animações suaves e efeitos de transição proporcionam uma navegação interativa e agradável. O projeto foi desenvolvido com foco em usabilidade e estética.',
      shortDescription:
        'LinkTreeProfile é um site pessoal que centraliza links importantes de forma prática e atraente. Utiliza Tailwind CSS e é responsivo, com animações suaves para uma experiência interativa.',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/linkTreeProfile',
      urlDeploy: 'https://link-tree-profile.vercel.app/',
      languages: ['HTML', 'CSS', 'Javascript', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 3,
      status: 'Finalizado',
      name: 'Ecommerce Page',
      longDescription:
        'Esse projeto mostra uma página de uma loja virtual de um site idealizada pelo FrontEnd Mentor. Tendo em sua composição o conteúdo principal uma navbar, a seção dos produtos, carrinho de compras e pedidos.',
      shortDescription:
        'Página de ecommerce com layout otimizado, responsivo e funcionalidades interativas.',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/EcommercePage',
      urlDeploy: 'https://ecommerce-page-nu.vercel.app/',
      languages: ['HTML', 'CSS', 'Javascript', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 4,
      status: 'Finalizado',
      name: 'IntroSection',
      longDescription:
        'Esse projeto mostra uma página de introdutória de um site chamado Snap idealizada pelo FrontEnd Mentor. Tendo em sua composição o conteúdo principal uma navbar com dropdwons, ícones e botões.',
      shortDescription:
        'Desenvolvimento de uma seção introdutória com design responsivo e interatividade.',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/introSection',
      urlDeploy: 'https://introsection-tau.vercel.app/',
      languages: ['HTML', 'CSS', 'Javascript', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 5,
      status: 'Finalizado',
      name: 'Meu portfolio',
      longDescription:
        'Este portfólio pessoal foi desenvolvido com Angular, combinando um design moderno e responsivo para oferecer uma experiência de navegação otimizada em diferentes dispositivos. A aplicação foi construída com foco em performance e acessibilidade, permitindo fácil visualização de projetos, habilidades e informações profissionais. O layout é dinâmico e intuitivo, proporcionando uma interação fluida e agradável aos usuários.',
      shortDescription:
        'Portfólio pessoal desenvolvido com Angular, utilizando um design responsivo e otimizado.',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/portfolioWebsite',
      urlDeploy: '',
      languages: ['Angular', 'Typescript', 'SASS', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 6,
      status: 'Finalizado',
      name: 'CultivaMais',
      longDescription:
        'Esse projeto tem como objetivo proporcionar ao agricultor familiar e sua família por meio da inteligência artificial, ferramentas que garantam a sustentabilidade e produtividade de suas terras de forma inclusiva e democrática.',
      shortDescription:
        'Aplicativo desenvolvido com FlutterFlow para auxiliar agricultores familiares no cultivo de plantas.',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/CultivaMais',
      urlDeploy: 'https://chatappfllw5.flutterflow.app',
      languages: ['FlutterFlow'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 7,
      status: 'Finalizado',
      name: 'Rating Component',
      longDescription:
        'Esse projeto mostra uma página com um componete que armazena e distingue qual avaliação selecionada pelo usuário e mostra uma resposta a essa interação.',
      shortDescription:
        'Componente de avaliação de 1 a 5 estrelas desenvolvido com HTML, CSS e JavaScript.',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/RatingComponent',
      languages: ['HTML', 'CSS', 'Javascript', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 8,
      status: 'Finalizado',
      name: 'Jogo-PPT',
      longDescription:
        'Jogo da pedra papel e tesoura em HTML, CSS e Javascript simples sem resposividade para desktop, feito antigamente',
      shortDescription:
        'Jogo de Pedra, Papel e Tesoura com funcionalidades interativas em JavaScript.',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/Jogo-PPT',
      languages: ['HTML', 'CSS', 'Javascript', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 9,
      status: 'Finalizado',
      name: 'MyCodes',
      longDescription:
        'Esse projeto foi utilizado para reforçar conhecimentos básicos sobre a linguagem e praticar a lógica de programação em uma aplicação simples que fiz no antigamente.',
      shortDescription:
        'Repositório pessoal com projeto acadêmico em Python sobre Pedra, papel e tesoura.',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/IcaroMachadoCarvalho/MyCodes',
      languages: ['Python'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 10,
      status: 'Em andamento',
      name: 'toDoList',
      longDescription:
        'Este projeto consiste em um To-Do List, onde o usuário pode realizar anotações, buscar por blocos de tarefas, editar, concluir e salvar as atividades no localStorage. A aplicação é construída com TypeScript para garantir um melhor controle do fluxo de dados e é estruturada de forma semelhante a um projeto em Angular.',
      shortDescription:
        'Lista de tarefas (To-Do) com funcionalidades de adição e remoção de itens, utilizando TypeScript.',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/username/todolist',
      urlDeploy: 'https://todolist.vercel.app/',
      languages: ['Typescript', 'HTML', 'CSS', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
    {
      id: 11,
      status: 'Em andamento',
      name: 'Multinews',
      longDescription:
        'O projeto é uma aplicação desenvolvida com React, que utiliza rotas para navegar entre diferentes páginas, como a página inicial, formulários para criar e entrar na conta, e uma seção de integração com uma API. Essa integração permite realizar buscas, trazendo resultados filtráveis tanto para pesquisas nacionais quanto internacionais, com diversas opções de filtros disponíveis.',
      shortDescription:
        'Aplicativo de notícias com integração de APIs, desenvolvido com React e SASS.',
      imgProject: '../../assets/images/imagemFundoIntro.webp',
      urlGithub: 'https://github.com/username/multinews',
      urlDeploy: 'https://multinews.vercel.app/',
      languages: ['React', 'SASS', 'Git', 'Github'],
      languagesImgs: ['../../assets/images/html5-original.svg', ''],
    },
  ];
  constructor() {}
  getContentProjects() {
    return this.projectsInfo;
  }

  getProjectById(id: number): project | undefined {
    return this.projectsInfo.find((item) => item.id === id);
  }
}
