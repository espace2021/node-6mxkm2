import  mongoose  from "mongoose"
const articleSchema=mongoose.Schema({
    reference:{ type: String, required: true,unique:true },
    designation:{ type: String, required: true,unique:true },
    prixAchat:{ type: Number, required: false },
    prixVente:{ type: Number, required: false },
    prixSolde:{ type: Number, required: false },
    marque:{ type: String, required: false },
    qtestock:{ type: Number, required: false },
    caracteristiques:{ type: String, required: false },
    imageartpetitf:{ type: String, required: false },
    imageartgrandf:{ type: Array, required: false },
    categorieID: {type:mongoose.Schema.Types.ObjectId,
    ref:'Categorie'},
    scategorieID: {type:mongoose.Schema.Types.ObjectId,
    ref:'Scategorie'}
    })
const Article = mongoose.model('Article', articleSchema);

export default Article

