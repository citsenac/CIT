import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


export default function Depoimentos({target}: {target: string}) {
    return (
        <section id={target} className="relative mt-24 mx-2">
             <div className="max-w-64 text-start mb-10">
                 <h3 className="text-2xl font-semibold text-white mb-2 mx-auto poppins">
                    Depoimentos
                </h3>
                <p className="text-white poppins text-sm">Alguns depoimentos e experiências de alunos que passaram pelo CIT.</p>
            </div>

            <div className='max-w-96 mx-auto'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1.5}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    loop={true}
                >
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}