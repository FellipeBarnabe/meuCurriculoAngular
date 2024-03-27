import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SecondaryButtonComponent } from './secondary-button.component';

fdescribe('SecundaryButtonComponent', () => {
  let component: SecondaryButtonComponent;
  let fixture: ComponentFixture<SecondaryButtonComponent>;
  let routerTest: RouterTestingModule;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryButtonComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondaryButtonComponent);
    component = fixture.componentInstance;
    routerTest = fixture.debugElement.injector.get(RouterTestingModule);
    fixture.detectChanges();
  });

  it('CT001 - should be created', () => {
    expect(component).toBeTruthy();
  });
});
