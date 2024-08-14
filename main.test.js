import{expect, test} from 'vitest';
import isHigher from './main';

test('Checking if vitest was installed successfully', () => {
});

test('Checking if function isHigher returns true when parameter 1 is larger than parameter 2', () => {
    expect(isHigher(8,2)).toBe(true);
});

test('Checking if function isHigher returns false when paramter 1 is smaller than parameter 2', () => {
    expect(isHigher(3,12)).toBe(false);
});