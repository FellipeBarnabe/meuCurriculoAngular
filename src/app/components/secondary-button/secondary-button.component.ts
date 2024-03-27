import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'secondary-button',
  standalone: true,
  imports: [],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.css',
})
export class SecondaryButtonComponent {
  @Input() buttonText: string = '';
  @Input() navigatePath: string = '/';

  constructor(private router: Router) {}

  handleClick() {
    this.router.navigate([this.navigatePath]);
  }
}
