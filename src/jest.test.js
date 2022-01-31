import { catipalIdeaGoodSir, reverseString } from './jest.js';




// testing capitalIdeaGoodSir
test('Capitalizes the first letter of a string', () => {
    expect(catipalIdeaGoodSir("hello there")).toBe("Hello there");
  });


// testing reverse
test('reverses a string', () => {
    expect(reverseString("emordnilap a ton saw siht")).toBe("this was not a palindrome");
  });