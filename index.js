// const express = require("express");
// const connectDB = require("./db"); // On appelle le fichier db.js pour la connexion

// const app = express();
// connectDB(); // Lancement de la connexion

// app.get("/", (req, res) => res.send("Site connecté à MongoDB !"));

// const PORT = 3000;
// app.listen(PORT, () => console.log(`Serveur en marche sur le port ${PORT}`));


const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const app = express();

connectDB();

app.use(cors());
app.use(express.json()); // Pour lire les données JSON envoyées par le frontend

// Utiliser les routes pour les livres
const booksRoute = require('./routes/books');
app.use('/api/books', booksRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Serveur backend lancé sur le port ${PORT}`));
