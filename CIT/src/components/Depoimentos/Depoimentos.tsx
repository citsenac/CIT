import React, { useEffect, useState } from "react";
import useWindowDimensions from "../Utils/WindowDimensions";
import Depoimento from "./Depoimento";

export default function Depoimentos({target}: {target: string}) {
    const depoimentos = [
        {id: "0", img: "test-profile.png", nome: "Nome do Aluno", curso: "Sistemas para Internet", depoimento: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
        {id: "1", img: "test-profile.png", nome: "Nome do Aluno", curso: "Sistemas para Internet", depoimento: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
        {id: "2",img: "test-profile.png", nome: "Nome do Aluno", curso: "Sistemas para Internet", depoimento: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
        {id: "3",img: "test-profile.png", nome: "Nome do Aluno", curso: "Sistemas para Internet", depoimento: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
        {id: "4",img: "test-profile.png", nome: "Nome do Aluno", curso: "Sistemas para Internet", depoimento: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
        {id: "5",img: "test-profile.png", nome: "Nome do Aluno", curso: "Sistemas para Internet", depoimento: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
        {id: "6",img: "test-profile.png", nome: "Nome do Aluno", curso: "Sistemas para Internet", depoimento: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    ]

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

    const calculateOpacity = () => {
      const offset = elementOffsetTop - scrollY;
      if (offset > 0) {
        return 0; // Initially invisible
      } else if (offset > -1800) {
        return 0 + (offset / -2200); // Fade in as moving up
      } else {
        return 1; // Fully visible
      }
    };

    const { width } = useWindowDimensions();

    return (
        <section id={target} className="relative pt-24 px-2" >

            <img src="logo-cit-outline.svg" alt="Logo do CIT, em formato de uma seta para a direita, com textura de tecnologia dentro dele, em formato só de linhas" className="absolute top-1/2 left-0 w-full h-[32rem] md:top-0 md:h-[70rem] md:-translate-x-1/4" />

            <div style={{opacity: calculateOpacity()}}>
                <div className="max-w-64 md:mx-auto md:max-w-4xl text-start mb-10 relative z-1">
                    <h3 className="text-2xl md:text-4xl font-semibold text-white mb-2 mx-auto poppins">
                        Depoimentos
                    </h3>
                    <p className="text-white poppins text-sm md:text-xl md:max-w-lg">Alguns depoimentos e experiências de alunos que passaram pelo CIT.</p>
                </div>
    
                <div className='max-w-96 md:max-w-4xl mx-auto relative z-1'>
                    <swiper-container
                        effect={'coverflow'}
                        grab-cursor={true}
                        centered-slides={true}
                        slides-per-view={width > 768 ? 3.5 : 1.5}
                        coverflow-effect-rotate={50}
                        coverflow-effect-stretch={0}
                        coverflow-effect-depth={100}
                        coverflow-effect-modifier={1}
                        coverflow-effect-slide-shadows={true}
                        loop={true}
                    >
                        {depoimentos.map((depoimento) => (
                            <swiper-slide key={depoimento.id}>
                                <Depoimento {...depoimento} />
                            </swiper-slide>
                        ))}
                    </swiper-container>
                </div>
            </div>
        </section>
    )
}