import { StatusCodes } from 'http-status-codes';
import { writeFile, readFile } from 'fs/promises';
import { Request, Response } from 'express';
import produtoService from '../service/produtoService';

class ProdutoController {

    public async criarProdutos(req, res) {

        const produtos = produtoService.criarProdutos(req.body);

        //return res.status(201).send();
        return res.status(StatusCodes.CREATED).send('ARQUIVO CRIADO!');
        
    }


    public async getProdutos(req, res) {

        const produtos = await produtoService.getProdutos();

        if(produtos) {
            return res.json(produtos);
        }else {
            return res.send('ERRO AO ABRIR ARQUIVO!');
        }
        
    }

    public async getEstoque(req, res) {

        const listaProdutos = await produtoService.getEstoque();    

        if (listaProdutos) {
            return res.json(listaProdutos);
        } else {
            return res.send('ERRO AO ABRIR ARQUIVO');
        }
        
    }

    public async getSomaReduce(req, res) {

        const somaEstoque = await produtoService.getSomaReduce();

        if (somaEstoque) {
            return res.send(`SOMA DOS VALORES DO ESTOQUE: ${somaEstoque}`);
        } else {
            return res.send('ERRO AO ABRIR ARQUIVO!');
        }

        //return res.json(somaEstoque);
    }
}

export default new ProdutoController();