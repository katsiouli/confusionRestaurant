import { ConfusionPage } from './app.po';

describe('confusion App', () => {
  let page: ConfusionPage;

  beforeEach(() => {
    page = new ConfusionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
