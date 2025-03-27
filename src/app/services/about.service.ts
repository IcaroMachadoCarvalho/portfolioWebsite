import { Injectable } from '@angular/core';

interface TextAbout {
  section: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  text: TextAbout[] = [
    {
      section: "mim",
      content: "<p><b>Sou desenvolvedor fullstack.</b> Tenho experiência em construir interfaces dinâmicas e responsivas utilizando tecnologias como <b>Angular, TypeScript, JavaScript, HTML, CSS</b> e ferramentas como <b>Sass, Tailwind.</b></p> <p><b>O que me motiva</b> a seguir é o constante aprendizado e a chance de criar soluções, buscando sempre melhorar, além de me especializar em novas ferramentas e técnicas, e trabalhar em projetos desafiadores para continuar evoluindo como profissional.</p>"
    },
    {
      section: "profissional",
      content: "<h3><b>INSS - Estagiário</b></h3> <p>Trabalhei na parte de orientações gerais ao público sobre processos administrativos previdenciários, auxiliei na criação de tarefas digitais, emissão de extratos e organização de processos.</p> <p><b>Desenvolvimento de habilidades</b> voltadas para a comunicação, resolução de problemas, pensamento analítico e aprendizado contínuo.</p>"
    },
    {
      section: "formacao",
      content: "<h3><b>Tecnólogo - Análise e Desenvolvimento de Sistemas</b></h3> <p>Jan 2023 - Dez 2024</p> <p>Universidade Cidade de São Paulo - UNICID</p> <h3><b>Técnico em Mecatrônica</b></h3> <p>Jan 2020 - Dez 2022</p> <p>Etec Martin Luther King - São Paulo</p>"
    }
  ];

  constructor() { }
  getAboutContent(){
    return this.text;
  }
}
