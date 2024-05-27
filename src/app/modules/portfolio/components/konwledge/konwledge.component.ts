import { Component, signal } from '@angular/core';
//interface
import { Iknowledge } from '../../interface/iknowledge.interface';

@Component({
  selector: 'app-konwledge',
  standalone: true,
  imports: [],
  templateUrl: './konwledge.component.html',
  styleUrl: './konwledge.component.scss'
})
export class KonwledgeComponent {
  public arrayKnowledge = signal<Iknowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de css3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimento de nodejs',
    },
    {
      src: 'assets/icons/knowledge/c_sharp.jpg',
      alt: 'Ícone de conhecimento de C#',
    },
  ])

}
