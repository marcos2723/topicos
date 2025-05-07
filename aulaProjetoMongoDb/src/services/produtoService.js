import {produtoRepository} from"../repositories/produtoRepository";

export const produtoService = {
    async criarProduto(dto){
        if(dto.preco < 0) throw new Error('Preço negativo não permitido');
        return produtoRepository.criar(dto);
    },
    async listarProdutos(){
        return produtoRepository.ListarTodos();
    },
    async obterProduto(id){
        const p = await produtoRepository.buscarPorId(id);
        if(!p) throw new error('Produto não encontrado');
        return p;
    },
    async atualizarProduto(id, dto){
        return produtoRepository.atualizar(id, dto);
    },
    async remover(id){
        return produtoRepository.deletar(id);
    }
}