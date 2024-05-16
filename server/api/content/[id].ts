import { defineEventHandler } from 'h3'
import { createPool } from 'mysql2'

const pool = createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});

export default defineEventHandler(async (event) => {
	// Extracting 'id' from URL parameters
	const { id } = event.context.params;

	console.log(id)

	return new Promise((resolve, reject) => {
		pool.query('SELECT * FROM tbconteudo WHERE secao = ?', [id], (error, results) => {
			if (error) return reject(error);
			resolve(results);
		});
	});
});
