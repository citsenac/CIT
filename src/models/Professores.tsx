export default class Professores {
    id: number;
    img: string;
    nome: string;
    cargo: string;

    constructor(id: number, img: string, nome: string, cargo: string) {
        this.id = id;
        this.img = img;
        this.nome = nome;
        this.cargo = cargo;
    }
}