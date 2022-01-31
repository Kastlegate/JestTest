import { catipalIdeaGoodSir, reverseString, calculator } from './index';




// testing capitalIdeaGoodSir
test('Capitalizes the first letter of a string', () => {
    expect(catipalIdeaGoodSir("hello there")).toBe("Hello there");
  });


// testing reverse
test('reverses a string', () => {
    expect(reverseString("emordnilap a ton saw siht")).toBe("this was not a palindrome");
  });

// testing the calculator

test('adding using the calculator', () => {
    expect(calculator.add(5, 5)).toBe(10);
  });

  test('subtracting using the calculator', () => {
    expect(calculator.subtract(5, 5)).toBe(0);
  });

  test('multiplying using the calculator', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
  });

  test('dividing using the calculator', () => {
    expect(calculator.divide(5, 5)).toBe(1);
  });