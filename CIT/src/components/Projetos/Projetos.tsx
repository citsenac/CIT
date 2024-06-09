// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import Projeto from './Projeto';

export default function Projetos({target}: {target: string}) {
    const projetos: {id: number, imgs: string[], title: string, description: string}[] = [
        {id:0, imgs: ["test-img.png", "test-img.png", "test-img.png"], title: "Projeto 1", description: "Descricão do projeto 1"},
        {id:1, imgs: ["test-img.png", "test-img.png", "test-img.png"], title: "Projeto 2", description: "Descricão do projeto 2"},
        {id:2, imgs: ["test-img.png", "test-img.png", "test-img.png"], title: "Projeto 3", description: "Descricão do projeto 3"},
        {id:3, imgs: ["test-img.png", "test-img.png", "test-img.png"], title: "Projeto 4", description: "Descricão do projeto 4"}
    ];

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
                                <Projeto projeto={projeto} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}