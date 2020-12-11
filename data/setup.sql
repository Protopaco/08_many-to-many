DROP TABLE IF EXISTS ingredients CASCADE;
DROP TABLE IF EXISTS dishes CASCADE;
DROP TABLE IF EXISTS ingredients_dishes CASCADE;

CREATE TABLE ingredients (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    price NUMBER,
    available BOOLEAN
)

CREATE TABLE dishes (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    ingredient_ids NUMBER[],
    name TEXT
)

CREATE TABLE ingredients_dishes (
    ingredient_id BIGINT REFERENCES ingredients(id),
    dish_id BIGINT REFERENCES ingredients(id),
    PRIMARY KEY(ingredient_id, dish_id)
)