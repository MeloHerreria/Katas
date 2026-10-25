# JAVASCRIPT CODE KATAS

# FizzBuzzWhizz Kata 🚀

TypeScript implementation of the classic **FizzBuzzWhizz** programming kata, applying unit tests with Jest and prime number logic.

## 📋 Game Rules

For a given natural number between **1 and 100**:
- **Fizz**: If the number is divisible by 3.
- **Buzz**: If the number is divisible by 5.
- **Whizz**: If the number is a prime number.
- **Combinations**: If it meets multiple rules, the results are concatenated (for example, `3` returns `"FizzWhizz"` because it is divisible by 3 and is also prime).
- **Original number**: If it does not meet any of the previous rules, it returns the number as is.

---

## 🧪 Automated Testing (TDD)
The project includes a complete suite of unit tests implemented with **Jest** to verify:
1. The behavior of normal numbers (e.g., `1`, `4`).
2. The division rules for 3 (`"Fizz"`), 5 (`"Buzz"`), and both (`"FizzBuzz"`).
3. The correct detection of prime numbers (`"Whizz"`) and their combinations.

To run the tests in your local environment, use:

- `npm run test`
- `npm run test:watch` (runs the tests in interactive mode)
