const pool = require('../utils/pool.js');

module.exports = class Ingredient {
    price;
    available;

    constructor(row) {
        this.id = row.id;
        this.price = row.price;
        this.available = row.available;
    }


}