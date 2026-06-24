import { expect, test } from 'vitest'
import { sum, minus } from './sum.js'
// this imports the test function

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('minus 1 - 2 to equal 1', () => {
  expect(minus(2, 1)).toBe(1)
})