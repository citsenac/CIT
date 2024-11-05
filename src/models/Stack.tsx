export default class Stack {
    id: number;
    nome: string;
    icon: string;
    corL: string;
    corR: string;

    constructor(id: number, nome: string, icon: string, corL: string, corR: string) {
        this.id = id;
        this.nome = nome;
        this.icon = icon;
        this.corL = corL;
        this.corR = corR;
    }
}