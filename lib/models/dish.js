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
        `);

        return rows.map(row => new Dish(row))
    };

    static async findById(id) {

        const { rows } = await pool.query(`
        SELECT 
            dishes.name,
            array_agg(ingredients.name) AS ingredients
        FROM dishes_ingredients
        JOIN dishes
        ON dishes_ingredients.dish_id = dishes.id
        JOIN ingredients
        ON dishes_ingredients.ingredient_id = ingredients.id
        WHERE dishes.id = $1
        GROUP BY dishes.id
        `, [id])

        return {
            ... new Dish(rows[0]),
            ingredients: rows[0].ingredients
        };
    }

    static async update(id, { name, ingredient_ids }) {
        const { rows } = await pool.query(`
        UPDATE dishes
        SET
        name = $1,
        ingredient_ids = $2
        WHERE id = $3
        RETURNING *
        `,
            [name, ingredient_ids, id]);

        return new Dish(rows[0])
    }

    static async delete(id) {

        await pool.query(`
        DELETE FROM dishes_ingredients
        WHERE dish_id = $1
        RETURNING *
        `, [id]);

        const { rows } = await pool.query(`
        DELETE FROM dishes
        WHERE id = $1
        RETURNING *
        `, [id]);

        return new Dish(rows[0]);
    }

}

