DROP TABLE IF EXISTS ingredients CASCADE;
DROP TABLE IF EXISTS dishes CASCADE;
DROP TABLE IF EXISTS dishes_ingredients;

CREATE TABLE ingredients (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT,
    available BOOLEAN
);

CREATE TABLE dishes (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    ingredient_ids INTEGER[],
    name TEXT
);

CREATE TABLE dishes_ingredients (
    ingredient_id BIGINT REFERENCES ingredients(id),
    dish_id BIGINT REFERENCES dishes(id),
    PRIMARY KEY(ingredient_id, dish_id)
);