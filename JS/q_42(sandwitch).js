function orderSandwich() {
    var toppings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        toppings[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (toppings.length === 0) {
        console.log("No toppings selected. It's a plain sandwich.");
    }
    else {
        console.log("Toppings: " + toppings.join(", "));
    }
    console.log("------------------------");
}
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Tomato");
orderSandwich(); // No toppings
