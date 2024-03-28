import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Route, Router } from '@angular/router';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { SecondaryButtonComponent } from './secondary-button.component';

fdescribe('SecundaryButtonComponent', () => {
  const expectedLabel: string = 'página inicial';
  let component: SecondaryButtonComponent;
  let fixture: ComponentFixture<SecondaryButtonComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryButtonComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondaryButtonComponent);
    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get(Router);
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

  it('CT005 - navigate to home page after clicked', () => {
    const cssSelector: string = 'div.button > input[type=button]';
    const btnEl: DebugElement = fixture.debugElement.query(By.css(cssSelector));
    
    //TODO:
    spyOn(router, 'navigate');
    spyOn(component, 'handleClick');
    btnEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.handleClick).toHaveBeenCalledTimes(1);
    expect(router.navigate).toHaveBeenCalled();
  });
});
