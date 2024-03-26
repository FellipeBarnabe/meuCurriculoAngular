import { Component, NgZone, inject } from '@angular/core';

import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [PrimaryButtonComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css',
})
export class NotfoundComponent {
  time: number = 15;

  constructor(private router: Router, private zone: NgZone) {
    inject(NgZone).runOutsideAngular(() => {
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
    });
  }
}
