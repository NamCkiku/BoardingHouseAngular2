import { BoardingHousePage } from './app.po';

describe('boarding-house App', () => {
  let page: BoardingHousePage;

  beforeEach(() => {
    page = new BoardingHousePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
