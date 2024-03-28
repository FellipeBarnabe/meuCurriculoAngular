import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HomeComponent } from '../../Pages/home/home.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SecondaryButtonComponent } from './secondary-button.component';

fdescribe('SecundaryButtonComponent', () => {
  const expectedLabel: string = 'teste de label';
  let component: SecondaryButtonComponent;
  let fixture: ComponentFixture<SecondaryButtonComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SecondaryButtonComponent,
        RouterTestingModule.withRoutes([
          { path: '', component: HomeComponent, pathMatch: 'full' },
        ]),
      ],
      declarations: [
        // Your component being tested
      ],
      providers: [
        // Add other providers if needed
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondaryButtonComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('CT001 - should be created', () => {
    expect(component).toBeTruthy();
  });

  it('CT002 - should render without a label text', () => {
    const cssSelector: string = 'div.button > span';
    const btnEl = fixture.debugElement.query(By.css(cssSelector)).nativeElement;

    expect(btnEl.textContent).toBe(component.buttonText);
  });

  it(`CT003 - should contains the label "${expectedLabel}".`, () => {
    const cssSelector: string = 'div.button > span';
    const btnEl = fixture.debugElement.query(By.css(cssSelector)).nativeElement;

    component.buttonText = expectedLabel;
    fixture.detectChanges();
    expect(btnEl.textContent).toBe(component.buttonText);
  });

  it('CT004 - should render with "/" in the navigatePath attribute, by default', () => {
    expect(component.navigatePath).toBe('/');
  });

  it('CT005 - navigate to home page, after clicked', () => {
    const cssSelector: string = 'div.button > input[type=button]';
    const btnEl: DebugElement = fixture.debugElement.query(By.css(cssSelector));
    const spyComponent = spyOn(component, 'handleClick');

    btnEl.triggerEventHandler('click');
    fixture.detectChanges();
    
    expect(spyComponent).toHaveBeenCalledTimes(1);
  });
});
