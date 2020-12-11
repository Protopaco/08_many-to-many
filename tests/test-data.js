
const testDish = {
    id: '1',
    ingredient_ids: [1, 2, 3, 4],
    name: 'biscuits'
}

const testDish2 = {
    id: '2',
    ingredient_ids: [1, 2],
    name: 'roux'
}

const testIngredient1 = {
    id: '1',
    name: 'butter',
    available: true
}

const updatedTestIngredient1 = {
    id: '1',
    name: 'butter',
    available: false
}

const testIngredient2 = {
    id: '2',
    name: 'flour',
    available: true
}

const testIngredient3 = {
    id: '3',
    name: 'water',
    available: true
}

const testIngredient4 = {
    id: '4',
    name: 'sugar',
    available: false
}

const testIngredient5 = {
    id: '5',
    name: 'salt',
    available: false
}




module.exports = { testDish, testDish2, testIngredient1, updatedTestIngredient1, testIngredient2, testIngredient3, testIngredient4, testIngredient5 }