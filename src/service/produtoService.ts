import { writeFile, readFile } from 'fs/promises';


class ProdutoService {

    async criarProdutos(data) {
        try {
            await writeFile('products.json', JSON.stringify(data));
        } catch(erro) {
            console.log('FALHA AO CRIAR PRODUTO!');
        }
    }

    async getProdutos() {
        
        try {
            const produtos = await readFile('products.json','utf-8');
            return JSON.parse(produtos);
        } catch(erro) {
            console.log('FALHA AO LER ARQUIVO!');
        }
    }

    async getEstoque() {
        try {
            const produtos = await this.getProdutos();
            const listaProdutos = produtos.map((item) => {
                return {
                    nome: item.nome,
                    qtde: item.qtde,
                    preco: item.preco,
                    valor_stock: item.preco*item.qtde
                }
            })
            return listaProdutos; 
        } catch(erro) {
            console.log('FALHA AO LER ARQUIVO!');
        }
    }

    async getSomaReduce() {
        try {
            const produtos = await this.getEstoque();
            const estoqueProdutos = produtos.reduce((totalValue, value) => {
                return (totalValue + value.valor_stock);
            },0).toFixed(2);

        return JSON.parse(estoqueProdutos);
        
        } catch(erro) {
            console.log("ERRO TENTE NOVAMENTE!");
        }
    }
}

export default new ProdutoService();