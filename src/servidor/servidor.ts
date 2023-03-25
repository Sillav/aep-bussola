import 'dotenv/config';
import express from 'express';
import { rota } from './rotas/rotas';

const servidor = express();

servidor.use(express.json());

servidor.use(rota);

export { servidor };