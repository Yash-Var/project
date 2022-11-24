const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "google pixel ",
    price: 499.99,
    amount: 2,
  },
  {
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    amount: 4,
  },
  {
    title: "Xiaomi Redmi Note 5",
    price: 399.99,
    amount: 3,
  },
];

let { totalItem, totalCart } = cart.reduce(
  (total, cartItem) => {
    const {amount,price}=cartItem
    total.totalItem += amount;
    total.totalCart += amount * price;

    return total;
  },
  {
    totalItem: 0,
    totalCart: 0,
  }
);
totalCart = totalCart.toFixed(2);
console.log(totalItem, totalCart);
