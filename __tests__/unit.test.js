// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1,2)).toBe(3);
// });

test('test 1 isPhoneNumber', () => {
  expect(isPhoneNumber('(818)515-0101')).toBe(true);
});
test('test 2 isPhoneNumber', () => {
  expect(isPhoneNumber('(000)000-9999')).toBe(true);
});
test('test 3 isPhoneNumber', () => {
  expect(isPhoneNumber('0')).toBe(false);
});
test('test 4 isPhoneNumber', () => {
  expect(isPhoneNumber('(818)515-010')).toBe(false);
});

test('test 1 isEmail', () => {
  expect(isEmail('a@gmail.com')).toBe(true);
});
test('test 2 isEmail', () => {
  expect(isEmail('johnsmith99@something.net')).toBe(true);
});
test('test 3 isEmail', () => {
  expect(isEmail('@gmail.com')).toBe(false);
});
test('test 4 isEmail', () => {
  expect(isEmail('word@gmail')).toBe(false);
});


test('test 1 isStrongPassword', () => {
  expect(isStrongPassword('abcdef1029')).toBe(true);
});
test('test 2 isStrongPassword', () => {
  expect(isStrongPassword('aaaa')).toBe(true);
});
test('test 3 isStrongPassword', () => {
  expect(isStrongPassword('bb')).toBe(false);
});
test('test 4 isStrongPassword', () => {
  expect(isStrongPassword('password-')).toBe(false);
});

test('test 1 isDate', () => {
  expect(isDate('1/1/1111')).toBe(true);
});
test('test 2 isDate', () => {
  expect(isDate('10/10/2002')).toBe(true);
});
test('test 3 isDate', () => {
  expect(isDate('11/11/111')).toBe(false);
});
test('test 4 isDate', () => {
  expect(isDate('1203/1111')).toBe(false);
});

test('test 1 isHexColor', () => {
  expect(isHexColor('#010cd3')).toBe(true);
});
test('test 2 isHexColor', () => {
  expect(isHexColor('#f0f')).toBe(true);
});
test('test 3 isHexColor', () => {
  expect(isHexColor('#83892z')).toBe(false);
});
test('test 4 isHexColor', () => {
  expect(isHexColor('01024')).toBe(false);
});
