import { ActivatedRoute, Router } from '@angular/router';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { NotfoundComponent } from './notfound.component';

describe('NotfoundComponent', () => {
  let component: NotfoundComponent;
  let fixture: ComponentFixture<NotfoundComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotfoundComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {},
          },
        },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(NotfoundComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('CT001 - should create.', () => {
    expect(component).toBeTruthy();
  });

  it('CT002 - should contains a button with text "página inicial".', () => {
    expect(component.btnHomeText).toBe('página inicial');
  });

  it('CT003 - should start the coundows timer with a minimum  of 10s.', () => {
    expect(component.time).toBeGreaterThan(9);
  });

  it('CT004 - should navigate to home page after the countdow time is finished.', fakeAsync(() => {
    const advanceTime: number = (component.time + 1) * 1000;
    const initialTime: number = component.time;

    spyOn(router, 'navigate');

    component.startCount();

    tick(advanceTime); // Advance the test time.

    expect(component.time).toBeLessThan(initialTime);
    expect(router.navigate).toHaveBeenCalledOnceWith(['/']);
  }));
});
