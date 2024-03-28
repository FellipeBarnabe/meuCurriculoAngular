import { EducationSection, ResumeSection } from '../../models/ResumeSection';
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { Component } from '@angular/core';
import { ContatcComponent } from '../../components/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgFor } from '@angular/common';
import { ResumeSectionComponent } from '../../components/resume-section/resume-section.component';
import { UnorderedListComponent } from '../../components/unordered-list/unordered-list.component';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    ContatcComponent,
    NgFor,
    ResumeSectionComponent,
    UnorderedListComponent,
    FontAwesomeModule,
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  emailIcon = faEnvelope;
  linkedinIcon = faLinkedinIn;
  whatsAppIcon = faWhatsapp;
  workExperienceList: ResumeSection[] = [
    {
      role: 'Músico Freelancer',
      position: 'Guitarrista e Produtor Musical',
      period: 'FEV 2005 - JAN2023',
      activityList: [
        'Atuei como músico, guitarrista, violonista e compositor em diversas bandas locais;',
        'Participei de performances ao vivo e gravações de estúdio;',
        'Demonstrei habilidades versáteis ao adaptar meu estilo musical a uma variedade de gêneros, incluindo rock, heavy metal, blues, jazz, música clássica e música popular; e',
        'Colaborei com artistas e produtores na criação e execução de composições originais.',
      ],
    },
    {
      role: 'Escola de música Santa Terezinha',
      position: 'Professor de Música',
      period: 'jan 2009 - jan 2011',
      activityList: [
        'Prestei assistência a alunos durante as aulas ou em atendimentos individuais;',
        'Utilizei métodos de ensino criativos a fim de alcançar as metas de aprendizagem;',
        'Elaborei planos de aula e materiais didáticos com base nas diretrizes curriculares e no programa da disciplina; e',
        'Preparei aulas de acordo com a ementa da disciplina, abordando os conteúdos propostos de forma a promover a discussão e o debate entre os alunos.',
      ],
    },
    {
      role: 'Administração',
      position: 'Confecção de fardamentos linha dupla',
      period: 'jan 2013 - mar 2019',
      activityList: [
        'Atuei no registro e organização de documentos administrativos;',
        'Fiz atendimentos e telefonemas a clientes;',
        'Apoio na gestão de estoque; e',
        'Execução de outras tarefas relacionadas à administração conforme necessário.',
      ],
    },
  ];
  educationList: EducationSection[] = [
    {
      course: 'Trybe',
      institution: 'Desenvolvimento web: Módulo front-end',
      period: 'Abr 2023 - Ago 2023',
      activityList: [
        'Conhecimento avançado em HTML, CSS e JavaScript. Experiência prática com o framework React, com alguns projetos',
        'Proficiência em Git e controle de versão de código: Noções básicas de design e layout',
        ' Uso eficaz de ferramentas de desenvolvimento “IDE”, como Visual Studio Code.',
      ],
    },
    {
      course: 'Udemy',
      institution: 'Lógica de Programação',
      period: 'mai 2020 - jun 2020',
      activityList: ['Prática intensiva de lógica de progamação em C#.'],
    },
    {
      course: 'Uniservidade Federal da Paraíba',
      institution: 'Bacharelado em Filsofia',
      period: 'jul 2016 - jan 2023',
      activityList: [
        'O curso de Bacharelado em Filosofia da UFPB oferece uma formação abrangente em teorias filosóficas clássicas e contemporâneas, com ênfase em áreas como ética, lógica e epistemologia. ',
        'A interdisciplinaridade é valorizada, com conexões frequentes com outras áreas do conhecimento. O curso prepara os estudantes para uma variedade de carreiras, incluindo ensino, pesquisa, jornalismo e setores públicos e privados.',
      ],
    },
  ];
  habilitiesList: string[] = [
    'Trabalho em equipe',
    'Pensamento crítico e análise',
    'Adaptabilidade e flexibilidade',
    'Capacidade de aprendizado',
    'Atenção aos detalhes',
    'Comunicação eficaz (verbal e escrita)',
  ];
  toolsList: string[] = [
    'HTML',
    'CSS',
    'SCSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Python',
    'Flask',
    'Git',
    'Testes Unitários',
  ];
}
