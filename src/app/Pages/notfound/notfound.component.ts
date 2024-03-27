import { Component, NgZone, inject } from '@angular/core';

import { Router } from '@angular/router';
import { SecondaryButtonComponent } from '../../components/secondary-button/secondary-button.component';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [SecondaryButtonComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css',
})
export class NotfoundComponent {
  readonly btnHomeText: string = 'página inicial';
  time: number = 15;

  constructor(private router: Router, private zone: NgZone) {
    inject(NgZone).runOutsideAngular(() => {
      this.startCount();
    });
  }

  startCount() {
    //console.log('=> Setado o intevalo fora da zona do Angular.');
    const intervalID = setInterval(() => {
      this.zone.run(() => {
        // console.log(
        //   `=> Rodando decremento te tempo em 1s, dentro da zona do Angular: time => ${this.time}`
        // );
        this.time--;
      });

      if (this.time < 0) {
        clearInterval(intervalID);
        this.zone.run(() => {
          // console.log('=> Rodando navigate dentro da zona do Angular.');
          this.router.navigate(['/']);
        });
      }
    }, 1000);
  }
}
