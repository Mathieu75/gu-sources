import { GaucheUniePage } from './app.po';

describe('gauche-unie App', () => {
  let page: GaucheUniePage;

  beforeEach(() => {
    page = new GaucheUniePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
