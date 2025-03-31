import { it, expect } from 'vitest';
import { sayHello } from '.';

it('should display "Hello World!"', () => {
  expect(sayHello()).toBe('Hello World!');
});
