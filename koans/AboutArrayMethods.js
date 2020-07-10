describe("Array Method에 관하여", function () {
  it("'filter' method에 관해 학습합니다.", function () {
    let numbers = [1, 2, 3];

    let odd = numbers.filter(function (x) {
      return x % 2 !== 0;
    });

    expect(odd).toEqual([1, 3]);
    expect(odd.length).toBe(2);
    expect(numbers.length).toBe(3);
  });

  it("'map' method에 관해 학습합니다.", function () {
    let numbers = [1, 2, 3];

    let numbersPlus1 = numbers.map(function (x) {
      return x + 1;
    });

    expect(numbersPlus1).toEqual([2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("'reduce' method에 관해 학습합니다.", function () {
    let numbers = [1, 2, 3];
    let reduction = numbers.reduce(function (memo, x) {
      return memo + x;
    }, 0);

    expect(reduction).toBe(6);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("'forEach' method에 관해 학습합니다.", function () {
    let numbers = [1, 2, 3];
    let result = [];

    let isEven = function (item) {
      result.push((item % 2) === 0);
    };

    numbers.forEach(isEven);

    expect(result).toEqual([false, true, false]);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("'every' method에 관해 학습합니다.", function () {
    let onlyEven = [2, 4, 6];
    let mixedBag = [2, 4, 5, 6];

    let isEven = function (x) {
      return x % 2 === 0;
    };

    expect(onlyEven.every(isEven)).toBe(true);
    expect(mixedBag.every(isEven)).toBe(false);
  });

  it("'some' method에 관해 학습합니다.", function () {
    let onlyEven = [2, 4, 6];
    let mixedBag = [2, 4, 5, 6];

    let isEven = function (x) {
      return x % 2 === 0;
    };

    expect(onlyEven.some(isEven)).toBe(true);
    expect(mixedBag.some(isEven)).toBe(true);
  });

  it("2개의 method를 연속적으로 사용하는 방법에 관해 학습합니다.", function () {
    let result = [0, 1, 2].map(function (x) { return x + 1 })
      .reduce(function (sum, x) { return sum + x });

    expect(result).toEqual(6);
  });
});
