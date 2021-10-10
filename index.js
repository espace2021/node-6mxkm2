import express from 'express';
import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
const app = express();

import categorieRouter from "./routes/categorie.route.js"
//BodyParser Middleware
app.use(express.json()); 
// Connexion à la base données
mongoose.connect(process.env.DATABASE,{
 useNewUrlParser: true,
 useUnifiedTopology: true
 })
 .then(() => {console.log("Connexion à la base de données");
}).catch(err => {
 console.log('Impossible de se connecter à la base de données', err);
 process.exit();
});

app.use('/api/categories', categorieRouter);

app.get("/",(req,res)=>{
res.send("bonjour");
});
app.listen(process.env.PORT, () => {
 console.log(`Server is listening on port ${process.env.PORT}`); });
