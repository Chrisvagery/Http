import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Olá, mundo!");
});

app.post("/", (req, res) => {
  const { name } = req.body;
  res.status(200).send(`Olá, ${name}`);
});

app.get("/admin", (req, res) => {
  res.status(403).send("Acesso negado");
});

// Rota para lidar com 404 - Página não encontrada
app.use((req, res) => {
  res.status(404).send("Página não encontrada");
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo deu errado!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
