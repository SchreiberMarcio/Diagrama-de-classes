import { Item } from './Item';

export class Pedido {
    itens: Item[];
    valorTotal: number;

    constructor(itens: Item[]) {
        this.itens = itens;
        this.valorTotal = this.calcularValorTotal();
    }

    calcularValorTotal(): number {
        return this.itens.reduce((total, item) => total + item.valor, 0);
    }
}
