import { newE2EPage } from '@stencil/core/testing';

describe('form-add-contact', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<form-add-contact></form-add-contact>');

    const element = await page.find('form-add-contact');
    expect(element).toHaveClass('hydrated');
  });
});
