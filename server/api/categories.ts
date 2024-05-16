import { createPool } from 'mysql2'

const pool = createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});

export default eventHandler(async (event) => {
	return new Promise((resolve, reject) => {
		pool.query('SELECT * FROM tbsecao', (error, results) => {
			if (error) return reject(error);
			console.log(results)
			resolve(results);
		});
	});
});
