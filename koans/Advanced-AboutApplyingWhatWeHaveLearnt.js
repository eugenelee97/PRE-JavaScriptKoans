describe("지금까지 배운 것들에 관하여", function () {
  it("1000 보다 작은 모든 3 또는 5의 배수의 합을 찾아야합니다.", function () {
    let sum = 0;

    for (var i = 1; i < 1000; i += 1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("1000 보다 작은 모든 3 또는 5의 배수의 합을 찾아야합니다.(Array method)", function () {
    let sum = [...Array(1000).keys()].reduce((acc, item) => {
      if (item % 3 === 0 || item % 5 === 0) {
        return acc + item;
      }
      return acc;
    }, 0);

    expect(233168).toBe(sum);
  });

  describe('피자들에 관하여', function () {
    let products;

    beforeEach(function () {
      products = [
        { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
        { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
        { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
        { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
        { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
      ];
    });

    it("견과류나 버섯이 들어가있지 않은 피자를 찾아야합니다.", function () {
      let productsICanEat = [];

      for (let i = 0; i < products.length; i += 1) {
        let hasMushrooms = false;

        if (products[i].containsNuts === false) {
          for (let j = 0; j < products[i].ingredients.length; j += 1) {
            if (products[i].ingredients[j] === "mushrooms") {
              hasMushrooms = true;
            }
          }

          if (!hasMushrooms) productsICanEat.push(products[i]);
        }
      }

      expect(productsICanEat.length).toBe(1);
    });

    it("견과류나 버섯이 들어가있지 않은 피자를 찾아야합니다.(Array method)", function () {
      let productsICanEat = [];

      /* 위의 테스트를 array method filter를 활용해 바꾸어 보세요*/
      productsICanEat = products.filter(pizza => !pizza.containsNuts && !pizza.ingredients.includes('mushrooms'));

      expect(productsICanEat.length).toBe(1);
    });

    it("위의 피자들을 만드는데 어떤 재료가 얼만큼 쓰였는지 찾아야합니다.", function () {
      let ingredientCount = {};  // ingredientCount는 { "artichoke": 1 "mushrooms": 2 } 와 같은 형태가 될 것입니다.

      for (i = 0; i < products.length; i += 1) {
        for (j = 0; j < products[i].ingredients.length; j += 1) {
          ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
      }

      expect(ingredientCount['mushrooms']).toBe(2);
    });

    it("위의 피자들을 만드는데 어떤 재료가 얼만큼 쓰였는지 찾아야합니다.(Array method)", function () {
      let ingredientCount = {}
      // ingredientCount는 { "artichoke": 1 "mushrooms": 2 } 와 같은 형태가 될 것입니다.;

      /* 위의 테스트를 map 과 reduce를 연결해 바꾸어 보세요 */
      ingredientCount = products.reduce((acc, { ingredients }) => {
        if (ingredients.length) {
          ingredients.map(item => {
            if (acc[item]) {
              acc[item]++
            } else {
              acc[item] = 1
            }
          })
        }
        return acc
      }, {})

      expect(ingredientCount['mushrooms']).toBe(2);
    });
  })


  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });
  */
});
