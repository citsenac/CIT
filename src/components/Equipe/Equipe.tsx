import { Swiper, SwiperSlide } from 'swiper/react';
import Aluno from "../../models/Aluno";
import Professor from '../../models/Professor';
import AlunoComponent from "./Aluno";
import DisciplinarComponent from "./Disciplinar";


export default function Equipe({target, alunos, professores}: {target: string, alunos: Aluno[], professores: Professor[]}) {
    return (
        <section id={target} className="relative md:max-w-4xl md:mx-auto mt-16 mx-2 border-y border-solid border-[#606060] flex flex-col items-center">

            <div className="my-16 flex flex-col md:flex-row items-center gap-y-16 md:gap-x-32 lg:gap-x-96">
                {/* Alunos */}
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl mb-8 font-semibold text-white poppins">
                        Alunos
                    </h3>
                    <Swiper effect="cards" className="w-64" loop={true} grabCursor={true}>
                        {alunos.map((aluno) => (
                            <SwiperSlide key={aluno.id}>
                                <AlunoComponent aluno={aluno} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Equipe Disciplinar */}
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl mb-8 font-semibold text-white poppins">
                        Equipe Disciplinar
                    </h3>
                    <Swiper effect="cards" className="w-64" loop={true} grabCursor={true}>
                        {professores.map((funcionario) => (
                            <SwiperSlide key={funcionario.id}>
                                <DisciplinarComponent funcionario={funcionario} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </section>
    )
}