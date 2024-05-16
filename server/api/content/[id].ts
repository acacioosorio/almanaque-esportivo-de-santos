import { defineEventHandler } from 'h3'
import { createPool } from 'mysql2'

const pool = createPool({
	host: "bdaeswp.mysql.dbaas.com.br",
	user: "bdaeswp",
	password: "FW@4dm@t3st3",
	database: "bdaeswp"
});

export default defineEventHandler(async (event) => {
	const { id } = event.context.params;

	console.log(id)

	return new Promise((resolve, reject) => {
		pool.query('SELECT * FROM tbconteudo WHERE secao = ?', [id], (error, results) => {
			if (error) return reject(error);
			resolve(results);
		});
	});
});
