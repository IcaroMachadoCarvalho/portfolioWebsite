import { Injectable } from '@angular/core';

interface TextAbout {
  section: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  text: TextAbout[] = [
    {
      section: 'Mim',
      content:
        '<p><b>Sou desenvolvedor fullstack.</b> Tenho experiência em construir interfaces dinâmicas e responsivas utilizando tecnologias como <b>Angular, TypeScript, JavaScript, HTML, CSS</b> e ferramentas como <b>Sass, Tailwind.</b></p> <p><b>O que me motiva</b> a seguir é o constante aprendizado e a chance de criar soluções, buscando sempre melhorar, além de me especializar em novas ferramentas e técnicas, e trabalhar em projetos desafiadores para continuar evoluindo como profissional.</p>',
    },
    {
      section: 'Experiências profissionais',
      content:
        ' <h3><b>Hotelwww - Prestador de serviços</b></h3> <p>Atualmente presto serviços para a empresa Hotelwww, atuando na construção e manutenção de sites com WordPress. Minhas atividades incluem criação de páginas utilizando page builders como Elementor, instalação e configuração de plugins, ajustes técnicos via FTP, melhorias visuais, responsividade, SEO, garantindo desempenho contínuo e a usabilidade dos sites conforme as necessidades de seus clientes.</p><h3><b>INSS - Estagiário</b></h3> <p>Trabalhei na parte de orientações gerais ao público sobre processos administrativos previdenciários, auxiliei na criação de tarefas digitais, emissão de extratos e organização de processos. Desenvolvimento de habilidades voltadas para a comunicação, resolução de problemas, pensamento analítico e aprendizado contínuo.</p>',
    },
    {
      section: 'Formação',
      content:
        '<h3><b>Tecnólogo - Análise e Desenvolvimento de Sistemas</b></h3> <p>Jan 2023 - Dez 2024</p> <p>Universidade Cidade de São Paulo - UNICID</p> <h3><b>Técnico em Mecatrônica</b></h3> <p>Jan 2020 - Dez 2022</p> <p>Etec Martin Luther King - São Paulo</p>',
    },
  ];

  constructor() {}
  getAboutContent() {
    return this.text;
  }
}
