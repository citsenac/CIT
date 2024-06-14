import React, { useEffect, useState } from "react";
import GlassContainer from "../Partials/GlassContainer";
import Topico from "./Topico";

export default function SobreNos({target}: {target: string}) {
    const [scrollY, setScrollY] = useState(0);
    const [elementOffsetTop, setElementOffsetTop] = useState(0);
    const animatedBoxRef = React.createRef();
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      if (animatedBoxRef.current) {
        setElementOffsetTop(animatedBoxRef.current.offsetTop);
      }
    }, [animatedBoxRef]);
  
    const calculateTranslateY = () => {
      const offset = elementOffsetTop - scrollY;
      if (offset > 0) {
        return 300; // Initial offset below the original position
      } else if (offset > -300) {
        return 300 + offset; // Moving up
      } else {
        return 0; // Original position
      }
    };
  
    const calculateOpacity = () => {
      const offset = elementOffsetTop - scrollY;
      if (offset > 0) {
        return 0; // Initially invisible
      } else if (offset > -250) {
        return 0 + (offset / -500); // Fade in as moving up
      } else {
        return 1; // Fully visible
      }
    };

    return (
        <section id={target} className="relative pt-24 max-w-[22rem] md:max-w-6xl mx-auto">

            {/* Glow */}
            <div className="absolute rounded-full top-0 h-full w-full bg-[#5200ff] blur-[400px] md:blur-[800px]"></div>

            <GlassContainer addStyle={{transform: `translateY(${calculateTranslateY()}px)`, opacity: calculateOpacity()}} >
                <div className="w-full py-6 px-4 md:px-40 md:pt-9 md:pb-20 relative z-1">
                    <h3 className="text-2xl md:text-5xl lg:text-4xl text-white text-center font-medium poppins mb-10">O que fazemos?</h3>

                    <div className="flex flex-col md:flex-row space-y-16 md:space-y-0 md:justify-between">
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