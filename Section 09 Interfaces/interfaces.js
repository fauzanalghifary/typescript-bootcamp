var pt = { x: 123, y: 11234 };
var thomas = {
    first: "Thomas",
    last: "Hardy",
    id: 1234,
    sayHi: function () {
        return "Hello!";
    }
};
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
