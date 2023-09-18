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

	database.query(insertQuery, [valores], (err, result) => {
		if (err) return res.status(400).json(err);

		const novoComponente = {
			id: result.insertId,
			nome: req.body.nome,
			descricao: req.body.descricao,
			referencia: req.body.referencia,
			quantidade: req.body.quantidade,
		};

		return res.status(201).json(novoComponente);
	});
};
