// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// CHeck phone number
test('check 0 to be invalid phone number', () => {
  expect(isPhoneNumber(0)).toBe(false);
});

test('check 1231231234 to be invalid phone number', () => {
  expect(isPhoneNumber(1231231234)).toBe(false);
});

test('check (123) 123-1234 to be valid phone number', () => {
  expect(isPhoneNumber('(123)-123-1234')).toBe(true);
});

test('check 123-123-1234 to be valid phone number', () => {
  expect(isPhoneNumber('123-123-1234')).toBe(true);
});

// Check email
test('check a to be invalid email', () => {
  expect(isEmail('a')).toBe(false);
});

test('check a+a@a.a.a to be invalid email', () => {
  expect(isEmail('a+a@a.a.a')).toBe(false);
});

test('check abc_cdef@abcd.com to be valid email', () => {
  expect(isEmail('abc_cdef@abcd.com')).toBe(true);
});

test('check 8370137070127302@ab.ab to be valid email', () => {
  expect(isEmail('8370137070127302@ab.ab')).toBe(true);
});

// Check password
test('check abc to be weak password', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

test('check 1# to be weak password', () => {
  expect(isStrongPassword('1#')).toBe(false);
});

test('check abnfejkfbfd to be strong password', () => {
  expect(isStrongPassword('abnfejkfbfd')).toBe(true);
});

test('check Acfeibfe_293 to be strong password', () => {
  expect(isStrongPassword('Acfeibfe_293')).toBe(true);
});

// Check date
test('check 1/1/1 to be invalid date', () => {
  expect(isDate('1/1/1')).toBe(false);
});

test('check 123/1/1123 to be invalid date', () => {
  expect(isDate('123/1/1123')).toBe(false);
});

test('check 12/1/1123 to be valid date', () => {
  expect(isDate('12/1/1123')).toBe(true);
});

test('check 5/4/2026 to be valid date', () => {
  expect(isDate('5/4/2026')).toBe(true);
});

// Check hex color
test('check zxcvbz to be invalid hex color', () => {
  expect(isHexColor('zxcvbz')).toBe(false);
});

test('check #fgffff to be invalid hex color', () => {
  expect(isHexColor('#fgffff')).toBe(false);
});

test('check #ffffff to be valid hex color', () => {
  expect(isHexColor('#ffffff')).toBe(true);
});

test('check f123ee to be valid hex color', () => {
  expect(isHexColor('f123ee')).toBe(true);
});