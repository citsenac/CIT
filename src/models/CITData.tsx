import Alunos from "./Alunos";
import Depoimentos from "./Depoimentos";
import Professores from "./Professores";
import Projeto from "./Projeto";
import Stack from "./Stack";

export default class CITData {
    projetos: Projeto[];
    stacks: Stack[];
    alunos: Alunos[];
    professores: Professores[];
    depoimentos: Depoimentos[];

    constructor() {
        this.projetos = [];
        this.stacks = [];
        this.alunos = [];
        this.professores = [];
        this.depoimentos = [];
    }
}