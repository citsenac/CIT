// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import Projeto from './Projeto';

export default function Projetos() {
    const projetos: number[] = [0,1,2,3];

    return (
        <section id="projetos" className="relative mt-24">

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
                            <SwiperSlide key={projeto}>
                                <Projeto />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}