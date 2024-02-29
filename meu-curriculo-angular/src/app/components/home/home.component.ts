import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,BtnPrimaryComponent],
  providers:[],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
