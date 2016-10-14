import { type, number } from './lib/typed'

describe('type', () => {

  describe('number', () => {

    it('returns number argument', () => {
      expect(number(5)).toEqual(5);
    });

    it('throws exception if not a number', () => {
      expect(() => number('abc')).toThrow(new Error('Type violation: abc is not a number'));
    });
  });

  //TODO: Primitive types: bool, number, string
  //TODO: Type array
  //TODO: Type object
  //TODO: Define type as a shape, inspiration from React properties

  //TODO: Controlling/specifying return type of a function?
  //TODO: Integration with React?
  //TODO: Option to switch off checks/ignore errors?
});