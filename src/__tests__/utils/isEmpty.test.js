import isEmpty from "../../utils/isEmpty";

describe("isEmpty", () => {
  it("should return true if the object is empty", () => {
    const obj = {};
    expect(isEmpty(obj)).toBe(true);
  });

  it("should return false if the object is not empty", () => {
    const obj = {
      name: "tyrel",
    };
    expect(isEmpty(obj)).toBe(false);
  });
});
