import Aluno from "./Aluno";
import Disciplinar from "./Disciplinar";

export default function Equipe({target, alunos, professores}: {target: string, alunos: {id: number, img: string, nome: string, linkedin: string}[], professores: {id: number, img: string, nome: string, cargo: string}[]}) {
    return (
        <section id={target} className="relative md:max-w-4xl md:mx-auto mt-16 mx-2 border-y border-solid border-[#606060] flex flex-col items-center">

            <div className="my-16 flex flex-col md:flex-row items-center gap-y-16 md:gap-x-32 lg:gap-x-96">
                {/* Alunos */}
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

                {/* Equipe Disciplinar */}
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl mb-8 font-semibold text-white poppins">
                        Equipe Disciplinar
                    </h3>
                    <swiper-container effect="cards" class="w-64" loop='true' grab-cursor="true">
                        {professores.map((funcionario) => (
                            <swiper-slide key={funcionario.id}>
                                <Disciplinar funcionario={funcionario} />
                            </swiper-slide>
                        ))}
                    </swiper-container>
                </div>
            </div>

        </section>
    )
}