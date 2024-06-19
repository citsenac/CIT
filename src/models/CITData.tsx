import Aluno from "./Aluno";
import Depoimento from "./Depoimento";
import Professor from "./Professor";
import Projeto from "./Projeto";
import Stack from "./Stack";

export default class CITData {
    projetos: Projeto[];
    stacks: Stack[];
    alunos: Aluno[];
    professores: Professor[];
    depoimentos: Depoimento[];

    constructor() {
        this.projetos = [];
        this.stacks = [];
        this.alunos = [];
        this.professores = [];
        this.depoimentos = [];
    }
}