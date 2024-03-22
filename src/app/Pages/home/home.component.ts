import { Component } from '@angular/core';
import { ContatcComponent } from '../../components/contact/contact.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContatcComponent, TitleComponent],
  providers:[],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
