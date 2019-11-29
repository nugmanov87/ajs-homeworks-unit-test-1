import showHealth from "../app";

test("healthy", () => {
  const person = {
    name: "Маг",
    health: 85
  };

  expect(showHealth(person)).toBe("healthy");
});

test("wounded", () => {
  const person = {
    name: "Маг",
    health: 37
  };

  expect(showHealth(person)).toBe("wounded");
});

test("critical", () => {
  const person = {
    name: "Маг",
    health: 11
  };

  expect(showHealth(person)).toBe("critical");
});
