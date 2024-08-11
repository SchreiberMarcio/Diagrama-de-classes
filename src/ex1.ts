import { Item } from './classes/Item';
import { Pedido } from './classes/Pedido';

const item1 = new Item(10.0, "Item 1", "Descrição do Item 1");
const item2 = new Item(20.0, "Item 2", "Descrição do Item 2");

const pedido = new Pedido([item1, item2]);

console.log(`Valor total do pedido: R$ ${pedido.valorTotal}`);
