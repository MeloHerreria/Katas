import { game } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('should works', () => {
    expect(game(1)).toEqual(1);
  });

  test('If the number is 2 return Whizz', () => {
    expect(game(2)).toEqual('Whizz');
  });

  test('If the number is 3 return FizzWhizz', () => {
    expect(game(3)).toEqual('FizzWhizz');
  });

  test('If the number is 4 return 4', () => {
    expect(game(4)).toEqual(4);
  });

  test('If the number is 5 return BuzzWhizz', () => {
    expect(game(5)).toEqual('BuzzWhizz');
  });

  test('If the number is 6 return Fizz', () => {
    expect(game(6)).toEqual('Fizz');
  });

  test('If the number is 9 return Fizz', () => {
    expect(game(9)).toEqual('Fizz');
  });

  test('If the number is 10 return Buzz', () => {
    expect(game(10)).toEqual('Buzz');
  });

  test('If the number is 15 return FizzBuzz', () => {
    const result = game(15);
    expect(result).toEqual('FizzBuzz');
  });

  test('If the number is 20 return Buzz', () => {
    expect(game(20)).toEqual('Buzz');
  });

  test('If the number is 30 return FizzBuzz', () => {
    expect(game(30)).toEqual('FizzBuzz');
  });

  test('If the number is 75 return FizzBuzz', () => {
    expect(game(75)).toEqual('FizzBuzz');
  });

  test('If the number is 97 return Whizz', () => {
    expect(game(97)).toEqual('Whizz');
  });

  test('If the number is 100 return Buzz', () => {
    expect(game(100)).toEqual('Buzz');
  });
});