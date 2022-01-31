import { PaddingPipe } from './padding.pipe';

describe('PaddingPipe', () => {
  it('create an instance', () => {
    const pipe = new PaddingPipe();
    expect(pipe).toBeTruthy();
  });

  it('pads a given text with the reqiured zeros based on the number of pads passed', () => {
    const pipe = new PaddingPipe();
    expect(pipe.transform('2', 4)).toBe('0002');
    expect(pipe.transform('112', 4)).toBe('0112');
  });
});
