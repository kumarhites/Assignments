/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    const categoryTotal = {};

    transactions.forEach((transaction) => {
        const { category, price } = transaction;

        if (!categoryTotal[transaction.category]) {
            categoryTotal[transaction.category] = 0;
        }
        categoryTotal[transaction.category] += transaction.price;
    });
    const result = Object.keys(categoryTotal).map(category => ({
      category,
      totalSpent: categoryTotal[category],
    }));
  
    return result;
}
const obj = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: "Food",
        itemName: "Burger",
    },
    {
        id: 2,
        timestamp: 1656076800000,
        price: 20,
        category: "Food",
        itemName: "Pizza",
    },
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: "Travel",
        itemName: "Park Ticket",
    },
    {
        id: 1,
        timestamp: 1656076800000,
        price: 30,
        category: "Travel",
        itemName: "Museum",
    },
];
console.log(calculateTotalSpentByCategory(obj))
module.exports = calculateTotalSpentByCategory;
