import React, { useEffect, useState } from 'react';
import scrolllock from 'scroll-lock';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from '../Partials/Modal';
import useWindowDimensions from '../Utils/WindowDimensions';
import ModalProjeto from './ModalProjeto';
import Projeto from './Projeto';

export default function Projetos({target, projetos}: {target: string, projetos: {id: number, imgs: string[], title: string, desc: string}[]}) {

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
  
    const calculateTranslateY = () => {
      const offset = elementOffsetTop - scrollY;
      if (offset > 0) {
        return 1000; // Initial offset below the original position
      } else if (offset > -1000) {
        return 1000 + offset; // Moving up
      } else {
        return 0; // Original position
      }
    };
  
    const calculateOpacity = () => {
      const offset = elementOffsetTop - scrollY;
      if (offset > 0) {
        return 0; // Initially invisible
      } else if (offset > -950) {
        return 0 + (offset / -1200); // Fade in as moving up
      } else {
        return 1; // Fully visible
      }
    };

    // Get window width to set carousel content
    const { width } = useWindowDimensions();

    // Set enviroment to handle modal opening and closing
    scrolllock.enablePageScroll();

    const [open, setOpen] = useState(false);

    const [projeto, setProjeto] = useState({id: 0, imgs: [''], title: '', desc: ''});

    const toggleModal = (projeto: {id: number, imgs: string[], title: string, desc: string}) => {
        setOpen( prev => {
                return !prev
            }
        );

        setProjeto(() => {
                return  projeto
            }
        );

    }

    if (open) {
        scrolllock.disablePageScroll();
    } else {
        scrolllock.enablePageScroll();
    }

    return (
        <section id={target} className="relative pt-24" >

            <div style={animate ? {transform: `translateY(${calculateTranslateY()}px)`, opacity: calculateOpacity()} : {}} >
                <h3 className="text-2xl md:text-5xl font-semibold text-white text-center mb-8 max-w-64 md:max-w-2xl mx-auto poppins">
                    Dê uma olhada nos nossos projetos
                </h3>
    
                <div className="w-full box-border bg-[#989898] bg-opacity-30 border-y-2 border-solid border-[#989898] py-12">
                    <Swiper
                        className="w-full"
                        spaceBetween={50}
                        slidesPerView={width < 660 ? 1.5 : (width < 768 ? 2.5 : (width < 1024 ? 3.5 : 4.5))}
                        centeredSlides={true}
                        loop={true}
                    >
                        {projetos.map((projeto) => (
                                <SwiperSlide key={projeto.id} className="rounded-2xl">
                                        <Projeto toggleModal={() => toggleModal(projeto)} projeto={projeto} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>

            { open && <Modal toggleModal={() => toggleModal(projeto)}>
                <ModalProjeto projeto={projeto} />
            </Modal>}
        </section>
    )
}