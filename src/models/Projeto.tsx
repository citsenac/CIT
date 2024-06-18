class Projeto {

    id: number;
    imgs: string[];
    title: string;
    desc: string;

    constructor(id: number, imgs: string[], title: string, desc: string) {
        this.id = id;
        this.imgs = imgs;
        this.title = title;
        this.desc = desc;
    }
}

export default Projeto;