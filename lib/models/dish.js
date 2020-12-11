const pool = require('../utils/pool.js');

module.exports = class Dish {
    ingredient_ids;
    name;

    constructor(row) {
        this.id = row.id;
        this.ingredient_ids = row.ingredient_ids;
        this.name = row.name;
    };

    static async insert({ ingredient_ids, name }) {
        const { rows } = await pool.query(`
        INSERT INTO dishes
        (ingredient_ids, name)
        VALUES ($1, $2)
        RETURNING *    
        `, [ingredient_ids, name]);

        await Promise.all(
            ingredient_ids.map(id => {
                pool.query(`
        INSERT INTO dishes_ingredients
        (ingredient_id, dish_id)
        VALUES ($1, $2)
        RETURNING *
        `, [id, parseInt(rows[0].id)]);
            }))

        return new Dish(rows[0]);
    }

    static async find() {
        const { rows } = await pool.query(`
        SELECT *
        FROM dishes
        ORDER BY id ASC
        `)

        return rows.map(row => new Dish(row))
    }
}

