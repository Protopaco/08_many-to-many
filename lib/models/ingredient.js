const pool = require('../utils/pool.js');

module.exports = class Ingredient {
    name;
    available;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.available = row.available;
    }

    static async insert({ name, available }) {
        const { rows } = await pool.query(`
            INSERT INTO ingredients
            (name, available)
            VALUES ($1, $2)
            RETURNING * 
        `, [name, available]);

        return new Ingredient(rows[0])
    }
}