const pool = require('../utils/pool.js');

module.exports = class Dish {
    ingredient_id;
    method;
    price;

    constructor(row) {
        this.id = row.id;
        this.ingredient_id = row.ingredient_id;
        this.method = row.method;
        this.price = row.price;
    };


}