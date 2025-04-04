import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  // Seo página
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit(): void {
    // Definindo o título da página
    this.titleService.setTitle('Ícaro Machado | Desenvolvedor Full Stack');

    // Adicionando metadados dinâmicos
    this.metaService.updateTag({ name: 'description', content: 'Portfolio de Ícaro Machado, desenvolvedor Full Stack com experiência em tecnologias modernas. Confira meus projetos e experiências profissionais.' });
    this.metaService.updateTag({ name: 'keywords', content: 'ícaro machado, desenvolvedor full stack, portfolio, tecnologia, frontend, backend, projetos' });
    this.metaService.updateTag({ name: 'author', content: 'Ícaro Machado' });

    // Configurando Open Graph (para redes sociais)
    this.metaService.updateTag({ property: 'og:title', content: 'Ícaro Machado | Desenvolvedor Full Stack' });
    this.metaService.updateTag({ property: 'og:description', content: 'Confira o meu portfólio como desenvolvedor Full Stack, com projetos e experiências práticas no mercado de tecnologia.' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://example.com/imagem-do-perfil.jpg' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.exemplo.com' });
  }
}
