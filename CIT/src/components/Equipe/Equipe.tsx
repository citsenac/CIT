import Aluno from "./Aluno";

export default function Equipe({target}: {target: string}) {

    const alunos = [
        {id: "0", img: "test-profile.png", nome: "Nome do Aluno", linkedin: "https://www.linkedin.com/in/brunovicenters/"},
        {id: "1", img: "test-profile.png", nome: "Nome do Aluno", linkedin: "https://www.linkedin.com/in/brunovicenters/"},
        {id: "2",img: "test-profile.png", nome: "Nome do Aluno", linkedin: "https://www.linkedin.com/in/brunovicenters/"}
    ]

    return (
        <section id={target} className="relative mt-16 mx-2 border-y border-[#606060] flex flex-col items-center">

            <div className="my-16 flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl mb-8 font-semibold text-white poppins">
                        Alunos
                    </h3>
                    <swiper-container effect="cards" class="w-64" loop='true' grab-cursor="true">
                        {alunos.map((aluno) => (
                            <swiper-slide key={aluno.id}>
                                <Aluno aluno={aluno} />
                            </swiper-slide>
                        ))}
                    </swiper-container>
                </div>
            </div>

        </section>
    )
}