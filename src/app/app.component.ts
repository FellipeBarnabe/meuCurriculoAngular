import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Meu currículo Angular';
}
