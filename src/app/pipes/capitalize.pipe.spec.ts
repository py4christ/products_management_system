import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });

  it('transform method capitalizes the first letter of every word in every text passed', () => {
    const pipe = new CapitalizePipe();
    const transformedText = pipe.transform('angular is amazing')
    expect(transformedText).toBe('Angular Is Amazing');
  });
});
