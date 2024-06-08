import GlassContainer from "../utils/GlassContainer";
import Topico from "./Topico";

export default function SobreNos({target}: {target: string}) {
    return (
        <section id={target} className="relative mt-24 max-w-[22rem] mx-auto">

            {/* Glow */}
            <div className="absolute rounded-full top-0 h-full w-full bg-[#5200ff] blur-[400px]"></div>

            <GlassContainer>
                <div className="w-full py-6 px-4">
                    <h3 className="text-2xl text-white text-center poppins mb-10">O que fazemos?</h3>

                    <div className="flex flex-col space-y-16">
                        <Topico title="Inovação" icon="icons/inovacao.svg">
                            Trazemos inovação em nosso DNA. Os projetos criados aqui utilizam
                            paradigmas, linguagens, plataformas e frameworks modernos,
                            preparando o aluno para o futuro e entregando valor aos clientes.
                        </Topico>
                        <Topico title="Tecnologia" icon="icons/tecnologia.svg">
                            De web, mobile a jogos e realidade virtual, nossos projetos dão
                            oportunidade para que os alunos aprendam tecnologias e recursos
                            amplamente utilizados em empresas de desenvolvimento, tornando-os mais
                            preparados para lidar com os desafios do mercado de trabalho.
                        </Topico>
                    </div>
                </div>
            </GlassContainer>
        </section>
    )
}