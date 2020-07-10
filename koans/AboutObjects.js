describe("Object에 관해서", function () {

  describe("Property에 관해서", function () {
    let meglomaniac;

    beforeEach(function () {
      meglomaniac = { mastermind: "Joker", henchwoman: "Harley" };
    });

    it("객체에 property가 존재하는지 확인합니다.", function () {
      expect(meglomaniac.mastermind).toBe('Joker');
    });

    it("객체의 property는 알파벳 대소문자를 구분합니다.", function () {
      expect(meglomaniac.henchwoman).toBe('Harley');
      expect(meglomaniac.henchWoman).toBe(undefined);
    });
  });


  it("객체의 property로 담겨있는 function이 method처럼 작동하는지 확인합니다.", function () {
    const meglomaniac = {
      mastermind: "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };

    const battleCry = meglomaniac.battleCry(4);
    expect('They are Pinky and the Brain Brain Brain Brain').toMatch(battleCry);
  });

  it("'this'에 관해서", function () {
    const currentDate = new Date()
    const currentYear = (currentDate.getFullYear());
    const meglomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear;
      }
    };

    expect(currentYear).toBe(2020);
    expect(meglomaniac.calculateAge()).toBe(50);
  });

  describe("'in'에 관해서", function () {
    let meglomaniac;
    beforeEach(function () {
      meglomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("'theBomb'이라는 key를 가지고 있어야 합니다.", function () {

      const hasBomb = "theBomb" in meglomaniac;

      expect(hasBomb).toBe(true);
    });

    it("'theDetonator'라는 key를 가지고 있어선 안됩니다.", function () {

      const hasDetonator = "theDetonator" in meglomaniac;

      expect(hasDetonator).toBe(false);
    });
  });

  it("객체에 property를 더하고 빼는법을 확인합니다.", function () {
    const meglomaniac = { mastermind: "Agent Smith", henchman: "Agent Smith" };

    expect("secretary" in meglomaniac).toBe(false);

    meglomaniac.secretary = "Agent Smith";
    expect("secretary" in meglomaniac).toBe(true);

    delete meglomaniac.henchman;
    expect("henchman" in meglomaniac).toBe(false);
  });

  it("prototype를 사용해 모든 instance 객체에 property와 method 추가하는 법을 확인합니다.", function () {
    function Circle(radius) {
      this.radius = radius;
    }

    let simpleCircle = new Circle(10);
    let colouredCircle = new Circle(5);
    colouredCircle.colour = "red";

    expect(simpleCircle.colour).toBe(undefined);
    expect(colouredCircle.colour).toBe('red');

    Circle.prototype.describe = function () {
      return "This circle has a radius of: " + this.radius;
    };

    expect(simpleCircle.describe()).toBe('This circle has a radius of: 10');
    expect(colouredCircle.describe()).toBe('This circle has a radius of: 5');
  });
});
