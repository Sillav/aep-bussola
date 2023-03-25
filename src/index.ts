import { servidor } from "./servidor/servidor";

servidor.listen(process.env.PORTA || 3000, () => console.log('SERVIDOR INICIADO!'));