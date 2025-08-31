const { sum, calculate } = require('../math');

describe('Math Module', () => {
  describe('sum function', () => {
    test('adds two positive integers correctly', () => {
      expect(sum(1, 2)).toBe(3);
      expect(sum(5, 7)).toBe(12);
      expect(sum(100, 200)).toBe(300);
    });

    test('adds positive and negative integers correctly', () => {
      expect(sum(5, -3)).toBe(2);
      expect(sum(-10, 5)).toBe(-5);
      expect(sum(-7, -3)).toBe(-10);
    });

    test('adds floating point numbers correctly', () => {
      expect(sum(0.1, 0.2)).toBeCloseTo(0.3); // Using toBeCloseTo due to floating point precision
      expect(sum(1.5, 2.5)).toBe(4);
      expect(sum(-1.5, 2.5)).toBe(1);
    });

    test('handles very large numbers', () => {
      expect(sum(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
      expect(sum(1e15, 1e15)).toBe(2e15);
    });

    test('throws error for non-number inputs', () => {
      expect(() => sum('1', 2)).toThrow('Invalid input');
      expect(() => sum(1, '2')).toThrow('Invalid input');
      expect(() => sum(null, 2)).toThrow('Invalid input');
      expect(() => sum(1, undefined)).toThrow('Invalid input');
      expect(() => sum({}, [])).toThrow('Invalid input');
    });

    test('throws error for NaN inputs', () => {
      expect(() => sum(NaN, 2)).toThrow('Invalid input');
      expect(() => sum(1, NaN)).toThrow('Invalid input');
      expect(() => sum(NaN, NaN)).toThrow('Invalid input');
    });
  });

  describe('calculate function', () => {
    test('performs addition correctly', () => {
      expect(calculate(5, 3, 'add')).toBe(8);
      expect(calculate(-5, 3, 'add')).toBe(-2);
      expect(calculate(0.1, 0.2, 'add')).toBeCloseTo(0.3);
    });

    test('performs subtraction correctly', () => {
      expect(calculate(5, 3, 'subtract')).toBe(2);
      expect(calculate(3, 5, 'subtract')).toBe(-2);
      expect(calculate(-5, -3, 'subtract')).toBe(-2);
    });

    test('performs multiplication correctly', () => {
      expect(calculate(5, 3, 'multiply')).toBe(15);
      expect(calculate(-5, 3, 'multiply')).toBe(-15);
      expect(calculate(-5, -3, 'multiply')).toBe(15);
      expect(calculate(0.5, 0.2, 'multiply')).toBe(0.1);
    });

    test('performs division correctly', () => {
      expect(calculate(6, 3, 'divide')).toBe(2);
      expect(calculate(-6, 3, 'divide')).toBe(-2);
      expect(calculate(6, -3, 'divide')).toBe(-2);
      expect(calculate(-6, -3, 'divide')).toBe(2);
    });

    test('throws error for division by zero', () => {
      expect(() => calculate(5, 0, 'divide')).toThrow('Division by zero');
    });

    test('throws error for invalid operation', () => {
      expect(() => calculate(5, 3, 'power')).toThrow('Invalid operation');
      expect(() => calculate(5, 3, '')).toThrow('Invalid operation');
      expect(() => calculate(5, 3, null)).toThrow('Invalid operation');
    });

    test('throws error for non-number inputs', () => {
      expect(() => calculate('5', 3, 'add')).toThrow('Invalid input');
      expect(() => calculate(5, '3', 'add')).toThrow('Invalid input');
      expect(() => calculate(null, 3, 'add')).toThrow('Invalid input');
    });
  });
});
