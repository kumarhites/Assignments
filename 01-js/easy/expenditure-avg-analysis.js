function calculateAverageSpentByCategory(transactions){
    const spentByCategory = {};
    const categoryCount = {};

    transactions.forEach((transaction) => {
        const {category, price} = transaction;

        if(!spentByCategory[transaction.category]){
            spentByCategory[transaction.category] = 0;
            
        }
        spentByCategory[transaction.category] += transaction.price;

        if(!categoryCount[transaction.category]){
            categoryCount[transaction.category] = 0
        }
       categoryCount[category]++;
    });
    const result = Object.keys(spentByCategory).map(category => ({
        category,
        avergaeSpent: (spentByCategory[category] / categoryCount[category])
    }))
    return result;
    // return categoryCount;
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
console.log(calculateAverageSpentByCategory(obj));