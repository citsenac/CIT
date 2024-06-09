// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import { useState } from 'react';
import scrolllock from 'scroll-lock';
import 'swiper/css';
import Modal from '../Partials/Modal';
import ModalProjeto from './ModalProjeto';
import Projeto from './Projeto';

export default function Projetos({target}: {target: string}) {
    const projetos: {id: string, imgs: string[], title: string, description: string}[] = [
        {id:'0', imgs: ["test-img.png", "test-img.png", "test-img.png"], title: "Projeto 1", description: "Descricão do projeto 1"},
        {id:'1', imgs: ["test-img.png", "test-img.png", "test-img.png"], title: "Projeto 2", description: "Descricão do projeto 2"},
        {id:'2', imgs: ["test-img.png", "test-img.png", "test-img.png"], title: "Projeto 3", description: "Descricão do projeto 3"},
        {id:'3', imgs: ["test-img.png", "test-img.png", "test-img.png"], title: "Projeto 4", description: "Descricão do projeto 4"}
    ];

    const [open, setOpen] = useState(false);

    const [projeto, setProjeto] = useState({imgs: [''], title: '', description: ''});

    const toggleModal = (projeto: {imgs: string[], title: string, description: string}) => {
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
        <section id={target} className="relative mt-24">

            <h3 className="text-2xl font-semibold text-white text-center mb-8 max-w-64 mx-auto poppins">
                Dê uma olhada nos nossos projetos
            </h3>

            <div className="w-full box-border bg-[#989898] bg-opacity-30 border-y-2 border-[#989898] py-12">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1.5}
                    centeredSlides={true}
                    loop={true}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {projetos.map((projeto) => (
                            <SwiperSlide key={projeto.id}>
                                    <Projeto toggleModal={() => toggleModal(projeto)} projeto={projeto} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            { open && <Modal toggleModal={() => toggleModal(projeto)}>
                <ModalProjeto projeto={projeto} />
            </Modal>}
        </section>
    )
}