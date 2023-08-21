import { database } from "../config/database.js";

export const deletaComponente = (req, res) => {
	const deleteQuery = "DELETE FROM componentes WHERE `id` = ?";

	database.query(deleteQuery, [req.params.id], err => {
		if (err) return res.json(err);

		return res.status(204).json("Componente removido com sucesso!");
	});
};
