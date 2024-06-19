import React, { useEffect, useState } from "react";
import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Depoimento from "../../models/Depoimento";
import useWindowDimensions from "../Utils/WindowDimensions";
import DepoimentoComponent from "./Depoimento";

export default function Depoimentos({target, depoimentos}: {target: string, depoimentos: Depoimento[]}) {

    // Reduce motion check
    let animate: boolean = false;

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        animate = true;
    }

    // Get window height and set animation
    const [scrollY, setScrollY] = useState(0);
    const [elementOffsetTop, setElementOffsetTop] = useState(0);
    const animatedBoxRef = React.createRef<HTMLElement>();

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

            <div style={animate ? {opacity: calculateOpacity()} : {}}>
                <div className="max-w-64 md:mx-auto md:max-w-4xl text-start mb-10 relative z-1">
                    <h3 className="text-2xl md:text-4xl font-semibold text-white mb-2 mx-auto poppins">
                        Depoimentos
                    </h3>
                    <p className="text-white poppins text-sm md:text-xl md:max-w-lg">Alguns depoimentos e experiências de alunos que passaram pelo CIT.</p>
                </div>
    
                <div className='max-w-96 md:max-w-4xl mx-auto relative z-1'>
                    <Swiper
                        modules={[EffectCoverflow]}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={width > 768 ? 3.5 : 1.5}
                        coverflowEffect={{
                          rotate: 50,
                          stretch: 0,
                          depth: 100,
                          modifier: 1,
                          slideShadows: true,
                        }}
                        loop={true}
                    >
                        {depoimentos.map((depoimento) => (
                            <SwiperSlide key={depoimento.id}>
                                <DepoimentoComponent {...depoimento} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}