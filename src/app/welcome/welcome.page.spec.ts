import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomePage } from './welcome.page';

describe('WelcomePage', () => {
  let component: WelcomePage;
  let fixture: ComponentFixture<WelcomePage>;

  beforeEach(async(() => { //Me pone un error "Cannot find name 'async'.ts(2304)" en async y esta página está creada por determinado. Aún así corre
    fixture = TestBed.createComponent(WelcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
