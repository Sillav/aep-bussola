import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import produtoController from '../../controller/produtoController';

const rota = Router();

rota.post('/products',produtoController.criarProdutos);
rota.get('/products', produtoController.getProdutos);
rota.get('/products-stock',produtoController.getEstoque);
rota.get('/products-stock/reduce', produtoController.getSomaReduce); //ROTA COM RETORNO DAS SOMAS DOS VALORES DE TODOS OS PRODUTOS UTILIZANDO REDUCE



export { rota };