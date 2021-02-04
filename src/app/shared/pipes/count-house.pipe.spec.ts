import { CountHousePipe } from './count-house.pipe';

describe('CountHousePipe', () => {
  it('create an instance', () => {
    const pipe = new CountHousePipe();
    expect(pipe).toBeTruthy();
  });
});
