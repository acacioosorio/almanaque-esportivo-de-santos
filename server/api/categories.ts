import { createPool } from 'mysql2'

const pool = createPool({
	host: "bdaeswp.mysql.dbaas.com.br",
	user: "bdaeswp",
	password: "FW@4dm@t3st3",
	database: "bdaeswp"
});

export default eventHandler(async (event) => {
	return new Promise((resolve, reject) => {
		pool.query('SELECT * FROM tbsecao', (error, results) => {
			if (error) return reject(error);
			resolve(results);
		});
	});
});
