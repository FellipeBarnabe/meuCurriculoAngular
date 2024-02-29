import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ NgOptimizedImage, BtnPrimaryComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
