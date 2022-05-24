class Coffee_maker {
  MIN_WATER = 100;
  MIN_COFFEE = 7;
  MIN_MILK = 20;

  constructor(water, milk, coffee, totalMade) {
    this.water = water;
    this.milk = milk;
    this.coffee = coffee;
    this.totalMade = totalMade;
  }

  cupOfCoffee() {
    const { MIN_WATER, MIN_COFFEE, MIN_MILK } = this;

    if (this.water < MIN_WATER) {
      console.log(
        `Not enough water! You need minimum ${
          MIN_WATER - this.water
        } grams of water to make the coffee. You have made total ${
          this.totalMade
        } cups of coffee.`
      );
      return;
    }
    if (this.coffee < MIN_COFFEE) {
      console.log(
        `Not enough water! You need minimum ${
          MIN_COFFEE - this.coffee
        } grams of coffee to make the coffee. You have made total ${
          this.totalMade
        } cups of coffee.`
      );
      return;
    }
    if (this.milk < MIN_MILK) {
      console.log(
        `Not enough water! You need minimum ${
          MIN_MILK - this.milk
        } grams of milk to make the coffee. You have made total ${
          this.totalMade
        } cups of coffee.`
      );
      return;
    }

    this.water -= MIN_WATER;
    this.milk -= MIN_MILK;
    this.coffee -= MIN_COFFEE;
    this.totalMade++;
    console.log(
      `Coffee DONE! Enjoy your coffee! You have made ${this.totalMade} coffee today.`
    );
  }
}

const CoffeeMat = new Coffee_maker(1000, 100, 100, 0);

CoffeeMat.cupOfCoffee();
CoffeeMat.cupOfCoffee();
CoffeeMat.cupOfCoffee();
CoffeeMat.cupOfCoffee();
CoffeeMat.cupOfCoffee();
CoffeeMat.cupOfCoffee();
