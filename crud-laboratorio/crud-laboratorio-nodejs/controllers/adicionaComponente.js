import { database } from "../config/database.js";

export const adicionaComponente = (req, res) => {
	const insertQuery =
		"INSERT INTO componentes(`nome`, `descricao`, `referencia`, `quantidade`) VALUES(?)";

	const valores = [
		req.body.nome,
		req.body.descricao,
		req.body.referencia,
		req.body.quantidade,
	];

	database.query(insertQuery, [valores], err => {
		if (err) return res.json(err);

		return res.status(200).json("Componente adicionado com sucesso!");
	});
};
