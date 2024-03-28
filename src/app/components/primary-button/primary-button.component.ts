import { Component, Input } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'primary-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css',
})
export class PrimaryButtonComponent {
  @Input() buttonText: string = '';
  @Input() navigatePath: string = '/';
}
