const pool = require('../utils/pool.js');

module.exports = class Ingredient {
    price;
    perishible;
    available;

    constructor(row) {
        this.id = row.id;
        this.price = row.price;
        this.perishible = row.perishible;
        this.available = row.available;
    }


}