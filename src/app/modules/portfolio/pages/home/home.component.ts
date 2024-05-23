import { Component } from '@angular/core';
//Components
import { HeaderComponent } from '../../components/header/header.component';
import { KonwledgeComponent } from '../../components/konwledge/konwledge.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,KonwledgeComponent,ExperiencesComponent,ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
