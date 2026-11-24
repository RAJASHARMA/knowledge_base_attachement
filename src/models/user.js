const { pool } = require("../config/db");

const createUser = async (name, email, passwordHash) => {
    const query = `
        INSERT INTO users (name, email, password_hash)
        VALUES ($1, $2, $3)
        RETURNING id, name, email, created_at
    `;

    const result = await pool.query(query, [
        name,
        email,
        passwordHash
    ]);

    return result.rows[0];
};

const findUserByEmail = async (email) => {
    const query = `
        SELECT *
        FROM users
        WHERE LOWER(email) = LOWER($1)
    `;

    const result = await pool.query(query, [email]);

    return result.rows[0];
};

const findUserById = async (id) => {
    const query = `
        SELECT id, name, email, created_at
        FROM users
        WHERE id = $1
    `;

    const result = await pool.query(query, [id]);

    return result.rows[0];
};

module.exports = {
    createUser,
    findUserByEmail,
    findUserById
};