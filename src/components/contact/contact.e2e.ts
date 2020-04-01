import { newE2EPage } from '@stencil/core/testing';

describe('list-contact', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<list-contact></list-contact>');

    const element = await page.find('list-contact');
    expect(element).toHaveClass('hydrated');
  });
});
