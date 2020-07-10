describe("Private, Public에 관하여", function () {

  it("dot을 사용해 만든 property는 public하고 변경가능합니다.", function () {
    let aPerson = { firstname: "John", lastname: "Smith" };
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe('Alan');
  });

  it("this를 이용해 만든 property는 public하고 변경가능합니다.", function () {
    function Person(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    let aPerson = new Person("John", "Smith");
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe('Alan');
  });

  it("prototype을 사용해 만든 property는 public하고 변경가능합니다.", function () {
    function Person(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }

    Person.prototype.getFullName = function () {
      return this.firstname + " " + this.lastname;
    };

    let aPerson = new Person("John", "Smith");

    expect(aPerson.getFullName()).toBe('John Smith');

    aPerson.getFullName = function () {
      return this.lastname + ", " + this.firstname;
    };

    expect(aPerson.getFullName()).toBe('Smith, John');
  });

  it("closure를 사용해 만든 property는 private하고 변경이 불가능합니다.", function () {
    function Person(firstname, lastname) {
      let fullName = firstname + " " + lastname;

      this.getFirstName = function () { return firstname; };
      this.getLastName = function () { return lastname; };
      this.getFullName = function () { return fullName; };
    }

    let aPerson = new Person("John", "Smith");

    aPerson.firstname = "Penny";
    aPerson.lastname = "Andrews";
    aPerson.fullName = "Penny Andrews";

    expect(aPerson.getFirstName()).toBe('John');
    expect(aPerson.getLastName()).toBe('Smith');
    expect(aPerson.getFullName()).toBe('John Smith');

    aPerson.getFullName = function () {
      return aPerson.lastname + ", " + aPerson.firstname;
    };

    expect(aPerson.getFullName()).toBe('Andrews, Penny');
  });

});
