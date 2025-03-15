import { browser, by, element } from 'protractor';

describe('Header Component', () => {

  beforeEach(async () => {
    await browser.get('/');  // Navigate to the home page
  });

  it('should display the navbar', async () => {
    const navbar = element(by.css('nav.navbar'));
    expect(await navbar.isPresent()).toBe(true);
  });

  it('should have the correct title in navbar', async () => {
    const navbarTitle = element(by.css('.navbar-brand span'));
    expect(await navbarTitle.getText()).toBe('Quick Ecommerce Shopping');
  });

  it('should display the product list component', async () => {
    const productList = element(by.css('app-product-list'));
    expect(await productList.isPresent()).toBe(true);
  });

});
