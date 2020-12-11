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

    static async find() {
        const { rows } = await pool.query(`
        SELECT * FROM ingredients
        ORDER BY id
        `);

        return rows.map(row => new Ingredient(row))
    }

    static async findById(id) {
        const { rows } = await pool.query(`
        SELECT * FROM ingredients
        WHERE id = $1
        `, [id]);

        return new Ingredient(rows[0])
    }

    static async update(id, { name, available }) {
        const { rows } = await pool.query(`
        UPDATE ingredients
        SET
        name = $1,
        available = $2
        WHERE id = $3
        RETURNING *
        `, [name, available, id])

        return new Ingredient(rows[0]);
    }
}