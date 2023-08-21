import { database } from "../config/database.js";

export const atualizaComponente = (req, res) => {
	const updateQuery =
		"UPDATE componentes SET `nome` = ?, `descricao` = ?, `referencia` = ?, `quantidade` = ? WHERE `id` = ?";

	const valores = [
		req.body.nome,
		req.body.descricao,
		req.body.referencia,
		req.body.quantidade,
	];

	database.query(updateQuery, [...valores, req.params.id], err => {
		if (err) return res.json(err);

		return res.status(200).json("Componente atualizado com sucesso!");
	});
};
