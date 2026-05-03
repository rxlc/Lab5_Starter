// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

//Testing isPhoneNumber
test("The standard format (xxx) xxx-xxx should pass", () => {
  expect(isPhoneNumber("(754) 298-3021")).toBe(true);
});

test("No parentheses xxx-xxx-xxx should pass", () => {
  expect(isPhoneNumber("255-214-5943")).toBe(true);
});

test("No seperators xxxxxxxxx should fail", () => {
  expect(isPhoneNumber("8842153348")).toBe(false);
});

test("Wrong hypens xx-xxxxx-xxx should fail", () => {
  expect(isPhoneNumber("33-27414-124")).toBe(false);
});

//Testing isEmail
test("Standard format should pass", () => {
  expect(isEmail("test@ucsd.edu")).toBe(true);
});

test("Underscore included should pass", () => {
  expect(isEmail("test_123@ucsd.edu")).toBe(true);
});

test("Missing prefix should fail", () => {
  expect(isEmail("@ucsd.edu")).toBe(false);
});

test("Missing domain should fail", () => {
  expect(isEmail("test@.edu")).toBe(false);
});

//Testing isStrongPassword
test("First character is letter followed by 3 numbers should pass", () => {
  expect(isStrongPassword("b205")).toBe(true);
});

test("First character is letter followed by number, letter, and underscores (length 15) should pass", () => {
  expect(isStrongPassword("A12_45_q32_88_a")).toBe(true);
});

test("Exclamation mark somewhere after the first letter should fail", () => {
  expect(isStrongPassword("o129!flkm")).toBe(false);
});

test("First character is a number should fail", () => {
  expect(isStrongPassword("5ackmpo9")).toBe(false);
});

// Testing isDate
test("Standard date xx/xx/xxxx should pass", () => {
  expect(isDate("12/25/2025")).toBe(true);
});

test("Single digit x/x/xxxx should fail", () => {
  expect(isDate("1/2/2019")).toBe(true);
});

test("Two digit year x/x/xxxx should fail", () => {
  expect(isDate("5/6/22")).toBe(false);
});

test("Wrong seperator xx-xx-xxxx should fail", () => {
  expect(isDate("6-8-2026")).toBe(false);
});

// Testing isHexColor
test("Standard hex with hash should pass", () => {
  expect(isHexColor("#FAC25F")).toBe(true);
});

test("3 characters with no hash should pass", () => {
  expect(isHexColor("3AB")).toBe(true);
});

test("2 characters with hash should fail", () => {
  expect(isHexColor("#AA")).toBe(false);
});

test("Invalid hex letters should fail", () => {
  expect(isHexColor("#ABCXYZ")).toBe(false);
});
