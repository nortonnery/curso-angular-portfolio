import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjects } from '../../interface/IProjects.interface';

// Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects =signal<IProjects[]>([
    {
      src: 'assets/img/projects/Angular2.png',
      alt: 'Projeto Vida FullStack',
      Title: 'CRUD-Angular',
      with: '100px',
      height: '51px',
      description:
      '<p>Front End feito para aprimorar estudos do curso de Angular</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/nortonnery/CRUD-Angular-13-Estudo',
        },
      ],
    },
    {
      src: 'assets/img/projects/API.png',
      alt: 'Projeto Vida FullStack',
      Title: 'API CRUD .Net C#',
      with: '100px',
      height: '51px',
      description:
      '<p>Backend .Net C# feito para aprimorar estudos do curso de Angular</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/nortonnery/CRUD-WEB-API-ANGULAR-ESTUDO-',
        },
      ],
    },
   /*  {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      Title: 'API CRUD .Net C#',
      with: '100px',
      height: '51px',
      description:
      '<p>Backend .Net C# feito para aprimorar estudos do curso de Angular</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/nortonnery/CRUD-WEB-API-ANGULAR-ESTUDO-',
        },
      ],
    }, */
    {
      src: 'assets/img/projects/rabbitmq.jpg',
      alt: 'Projeto Vida FullStack',
      Title: 'RabbitMQ',
      with: '100px',
      height: '51px',
      description:
      '<p>Curso mensageria RabbitMQ com NodeJS. Ferramenta utilizada para Gerenciar e controlar filas e mensagens. </p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/nortonnery/CURSO-RABBITMQ',
        },
      ],
    },
  ]);

  public openDialog(data:IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass:EDialogPanelClass.PROJECTS
    })



  }
}
