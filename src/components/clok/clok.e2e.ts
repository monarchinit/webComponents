import { newE2EPage } from '@stencil/core/testing';

describe('custom-clok', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<custom-clok></custom-clok>');

    const element = await page.find('custom-clok');
    expect(element).toHaveClass('hydrated');
  });
});
