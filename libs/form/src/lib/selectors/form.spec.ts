import { FormSelector } from './form.selector';

describe('form', () => {
  it('should work', () => {
    const formSelector = new FormSelector();

    expect(formSelector.select()).toEqual([]);
  });
});
