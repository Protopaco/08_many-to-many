const pool = require('../utils/pool.js');

module.exports = class Dish {
    ingredient_id;
    name;

    constructor(row) {
        this.id = row.id;
        this.ingredient_id = row.ingredient_id;
        this.name = row.name;
    };


}