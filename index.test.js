"use strict";

const { calcScore } = require("./index");

test("empty", () => {
  expect(calcScore("")).toEqual({
    A: { score: "love", games: 0 },
    B: { score: "love", games: 0 }
  });
});

test("A", () => {
  expect(calcScore("A")).toEqual({
    A: { score: "15", games: 0 },
    B: { score: "love", games: 0 }
  });
});

test("BBB", () => {
  expect(calcScore("BBB")).toEqual({
    A: { score: "love", games: 0 },
    B: { score: "40", games: 0 }
  });
});

test("ABAB", () => {
  expect(calcScore("ABAB")).toEqual({
    A: { score: "30", games: 0 },
    B: { score: "30", games: 0 }
  });
});

test("AAAA", () => {
  expect(calcScore("AAAA")).toEqual({
    A: { score: "love", games: 1 },
    B: { score: "love", games: 0 }
  });
});

test("ABBBBBBBBBBBB", () => {
  expect(calcScore("ABBBBBBBBBBBB")).toEqual({
    A: { score: "love", games: 0 },
    B: { score: "love", games: 3 }
  });
});

test("BABBBA", () => {
  expect(calcScore("BABBBA")).toEqual({
    A: { score: "15", games: 0 },
    B: { score: "love", games: 1 }
  });
});

test("AAABBB", () => {
  expect(calcScore("AAABBB")).toEqual({
    A: { score: "deuce", games: 0 },
    B: { score: "deuce", games: 0 }
  });
});

test("AAABBBA", () => {
  expect(calcScore("AAABBBA")).toEqual({
    A: { score: "advantage", games: 0 },
    B: { score: "", games: 0 }
  });
});

test("AAABBBAB", () => {
  expect(calcScore("AAABBBAB")).toEqual({
    A: { score: "deuce", games: 0 },
    B: { score: "deuce", games: 0 }
  });
});

test("AAABBBABB", () => {
  expect(calcScore("AAABBBABB")).toEqual({
    A: { score: "", games: 0 },
    B: { score: "advantage", games: 0 }
  });
});

test("AAABBBABBB", () => {
  expect(calcScore("AAABBBABBB")).toEqual({
    A: { score: "love", games: 0 },
    B: { score: "love", games: 1 }
  });
});
