export default class Depoimentos {

    id: number;
    img: string;
    nome: string;
    curso: string;
    depoimento: string;

    constructor(id: number, img: string, nome: string, curso: string, depoimento: string) {
        this.id = id
        this.img = img
        this.nome = nome
        this.curso = curso
        this.depoimento = depoimento
    }
}