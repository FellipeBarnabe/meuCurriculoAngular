import { Component, Input } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'secondary-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.css',
})
export class SecondaryButtonComponent {
  @Input() buttonText: string = '';
  @Input() navigatePath: string = '/';
}
