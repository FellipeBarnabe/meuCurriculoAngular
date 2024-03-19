import { Component } from '@angular/core';
import { ContatcComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [ContatcComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

}
