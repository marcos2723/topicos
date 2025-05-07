import  {Schema, model} from 'mongoose'

const ProdutSchema = new Schema({
    nome: {type: String, requiret: true},
    prec: {type: Number, requiret: true, min: 0},
    quantidade: {type: Number, requiret: true, min: 0}
}, {timestamps: true});

export const Produto = model('Produto', ProdutoSchema);