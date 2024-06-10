import Depoimento from "./Depoimento"

export default function Depoimentos({target}: {target: string}) {
    const depoimentos = [
        {id: "0", img: "test-profile.png", nome: "Nome do Aluno", curso: "Sistemas para Internet", depoimento: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
        {id: "1", img: "test-profile.png", nome: "Nome do Aluno", curso: "Sistemas para Internet", depoimento: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
        {id: "2",img: "test-profile.png", nome: "Nome do Aluno", curso: "Sistemas para Internet", depoimento: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
    ]

    return (
        <section id={target} className="relative mt-24 mx-2">

             <div className="max-w-64 text-start mb-10">
                 <h3 className="text-2xl font-semibold text-white mb-2 mx-auto poppins">
                    Depoimentos
                </h3>
                <p className="text-white poppins text-sm">Alguns depoimentos e experiências de alunos que passaram pelo CIT.</p>
            </div>

            <div className='max-w-96 mx-auto'>
                <swiper-container
                    effect={'coverflow'}
                    grab-cursor={true}
                    centered-slides={true}
                    slides-per-view={1.5}
                    coverflow-effect-rotate={50}
                    coverflow-effect-stretch={0}
                    coverflow-effect-depth={100}
                    coverflow-effect-modifier={1}
                    coverflow-effect-slide-shadows={true}
                    loop={true}
                    pagination="true"
                >
                    {depoimentos.map((depoimento) => (
                        <swiper-slide key={depoimento.id}>
                            <Depoimento {...depoimento} />
                        </swiper-slide>
                    ))}
                </swiper-container>
            </div>
        </section>
    )
}