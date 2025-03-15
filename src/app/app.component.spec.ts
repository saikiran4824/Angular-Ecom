import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent], // No need to declare HeaderComponent
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a navbar', () => {
    const navbar = fixture.debugElement.query(By.css('nav.navbar'));
    expect(navbar).toBeTruthy();
  });

  it('should display the correct brand name', () => {
    const brandText = fixture.debugElement.query(By.css('.navbar-brand')).nativeElement.textContent;
    expect(brandText).toContain('Quick Ecommerce Shopping');
  });

  it('should have a gradient background in navbar', () => {
    const navbar = fixture.debugElement.query(By.css('nav.navbar')).nativeElement;
    expect(getComputedStyle(navbar).backgroundImage.includes('linear-gradient')).toBeTrue();
  });

  it('should render the <app-product-list> component', () => {
    const productList = fixture.debugElement.query(By.css('app-product-list'));
    expect(productList).toBeTruthy();
  });
});
