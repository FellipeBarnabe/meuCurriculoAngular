import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContatcComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,ContatcComponent],
  providers:[],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
