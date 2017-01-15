import { AstAppPage } from './app.po';

describe('ast-app App', function() {
  let page: AstAppPage;

  beforeEach(() => {
    page = new AstAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
