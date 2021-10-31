import express from 'express';
import mongoose from "mongoose"
import dotenv from 'dotenv'
import cors from 'cors';
dotenv.config()
const app = express();

import categorieRouter from "./routes/categorie.route.js"
import scategorieRouter from "./routes/scategorie.route.js"
import articleRouter from "./routes/article.route.js"

//BodyParser Middleware
app.use(express.json()); 
app.use(cors());

//PROMPT
import readline from 'readline';
const rl = readline.createInterface({             
  input: process.stdin,
  output: process.stdout
});

rl.question('Quelle est la base de données ? ', (answer) => {  
  console.log(`Base de données : ${answer} !`);
    // Connexion à la base données

mongoose.connect(answer,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {console.log("Connexion à la base de données réussie");
   }).catch(err => {
    console.log('Impossible de se connecter à la base de données', err);
    process.exit();
   
});


app.use('/api/categories/', categorieRouter);
app.use('/api/scategories', scategorieRouter);
app.use('/api/articles', articleRouter);


rl.close();                                     
});

app.get("/",(req,res)=>{
res.send("formation");
});


app.listen(process.env.PORT, () => {
 console.log(`Server is listening on port ${process.env.PORT}`); });
