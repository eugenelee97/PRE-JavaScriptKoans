function Muppet(age, hobby) {
  this.age = age;
  this.hobby = hobby;

  this.answerNanny = function () {
    return "Everything's cool!";
  }
}

function SwedishChef(age, hobby, mood) {
  Muppet.call(this, age, hobby);
  this.mood = mood;

  this.cook = function () {
    return "Mmmm soup!";
  }
}

SwedishChef.prototype = new Muppet();

describe("Inheritance에 관하여", function () {
  beforeEach(function () {
    this.muppet = new Muppet(2, "coding");
    this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  });

  it("자식 class의 method를 가지고 있어야합니다.", function () {
    expect(this.swedishChef.cook()).toEqual('Mmmm soup!');
  });

  it("부모 class의 method를 가지고 있어야합니다.", function () {
    expect(this.swedishChef.answerNanny()).toEqual(`Everything's cool!`);
  });

  it("부모 class의 property를 가지고 있어야합니다.", function () {
    expect(this.swedishChef.age).toEqual(2);
    expect(this.swedishChef.hobby).toEqual('cooking');
  });

  it("자식 class의 property를 가지고 있어야합니다.", function () {
    expect(this.swedishChef.mood).toEqual('chillin');
  });
});

// http://javascript.crockford.com/prototypal.html
Object.prototype.beget = function () {
  function F() { }
  F.prototype = this;
  return new F();
}

function Gonzo(age, hobby, trick) {
  Muppet.call(this, age, hobby);
  this.trick = trick;

  this.doTrick = function () {
    return this.trick;
  }
}

Gonzo.prototype = Muppet.prototype.beget();

describe("Prototype을 이용한 상속에 관하여", function () {
  beforeEach(function () {
    this.gonzo = new Gonzo(3, "daredevil performer", "eat a tire");
  });

  it("자식 class의 method를 가지고 있어야합니다.", function () {
    expect(this.gonzo.doTrick()).toEqual('eat a tire');
  });

  it("부모 class의 method를 가지고 있어야합니다.", function () {
    expect(this.gonzo.answerNanny()).toEqual(`Everything's cool!`);
  });

  it("부모 class의 property를 가지고 있어야합니다.", function () {
    expect(this.gonzo.age).toEqual(3);
    expect(this.gonzo.hobby).toEqual('daredevil performer');
  });

  it("자식 class의 property를 가지고 있어야합니다.", function () {
    expect(this.gonzo.trick).toEqual('eat a tire');
  });
});
