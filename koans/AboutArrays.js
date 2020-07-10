describe("Array에 관해서", function () {

  // 아래의 모든 test들을 통과하여야합니다
  it("Array의 기본을 확인합니다.", function () {
    let emptyArray = [];
    // Array에 typeof를 적용하면 어떤 값을 얻을 수 있을까요?
    expect(typeof (emptyArray)).toBe('object');
    expect(emptyArray.length).toBe(0);

    let multiTypeArray = [0, 1, "two", function () { return 3; }, { value1: 4, value2: 5 }, [6, 7]];
    expect(multiTypeArray[0]).toBe(0);
    expect(multiTypeArray[2]).toBe('two');
    expect(multiTypeArray[3]()).toBe(3);
    expect(multiTypeArray[4].value1).toBe(4);
    expect(multiTypeArray[4]["value2"]).toBe(5);
    expect(multiTypeArray[5][0]).toBe(6);
  });

  it("Array의 값을 다루는 방법을 확인합니다.", function () {
    let array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, 2]);

    array.push(3);
    expect(array).toEqual([1, 2, 3]);
  });

  it("Array의 길이를 확인합니다.", function () {
    let fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(4);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(6);

    let tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toBe(10);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(5);
  });

  it("Array 메소드 slice를 확인합니다.", function () {
    let array = ["peanut", "butter", "and", "jelly"];

    expect(array.slice(0, 1)).toEqual(['peanut']);
    expect(array.slice(0, 2)).toEqual(['peanut', 'butter']);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(['and', 'jelly']);
    expect(array.slice(3, 0)).toEqual([]);
    expect(array.slice(3, 100)).toEqual(['jelly']);
    expect(array.slice(5, 1)).toEqual([]);
  });

  it("Array 주소값을 확인합니다.", function () {
    let array = ["zero", "one", "two", "three", "four", "five"];

    function passedByReference(refArray) {
      refArray[1] = "changed in function";
    }
    passedByReference(array);
    expect(array[1]).toBe("changed in function");

    let assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).toBe("changed in assignedArray");

    let copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).toBe('three');
  });

  it("Array 메소드 push와 pop을 확인합니다.", function () {
    let array = [1, 2];
    array.push(3);

    expect(array).toEqual([1, 2, 3]);

    let poppedValue = array.pop();
    expect(poppedValue).toBe(3);
    expect(array).toEqual([1, 2]);
  });

  it("Array 메소드 shift와 unshift를 확인합니다.", function () {
    let array = [1, 2];

    array.unshift(3);
    expect(array).toEqual([3, 1, 2]);

    let shiftedValue = array.shift();
    expect(shiftedValue).toEqual(3);
    expect(array).toEqual([1, 2]);
  });
});
