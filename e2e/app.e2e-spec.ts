import { EngageesPage } from './app.po';

describe('engage-e-s App', () => {
  let page: EngageesPage;

  beforeEach(() => {
    page = new EngageesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
