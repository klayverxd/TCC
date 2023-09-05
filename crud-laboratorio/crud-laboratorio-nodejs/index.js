import express from "express";
import prometheus from "prom-client";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/userRoutes.js";

const app = express();

const port = process.env.PORT || 5000;

// Inicializa o registro de métricas do Prometheus
const register = new prometheus.Registry();
prometheus.collectDefaultMetrics({ register });

app.use(express.json());

app.use("/", userRoutes);

// Expõe um endpoint para as métricas do Prometheus
app.get("/metrics", async (req, res) => {
	res.set("Content-Type", register.contentType);
	res.end(await register.metrics());
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
