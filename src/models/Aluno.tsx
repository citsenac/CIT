export default class Aluno {
    id: number
    img: string
    nome: string
    linkedin: string
    constructor(id: number, img: string, nome: string, linkedin: string) {
        this.id = id
        this.img = img
        this.nome = nome
        this.linkedin = linkedin
    }
}