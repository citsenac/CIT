// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ModalProjeto({projeto}: {projeto: {imgs: string[], title: string, description: string}}) {
    
    return (
            
            <div className="flex flex-col items-center w-full h-full">
                <h3 className="mb-4 max-w-56 mx-auto font-semibold text-white text-2xl text-center poppins">{projeto.title}</h3>
                <div className='relative w-full flex justify-center items-center mb-6'>
                    { projeto.imgs.length > 1 &&
                        <Swiper slidesPerView={1} centeredSlides={true} loop={true} pagination={true}>
                            {projeto.imgs.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <img src={img} alt={projeto.title} className="rounded-2xl w-80 h-48 object-cover" />
                                </SwiperSlide>
                            ))
                        }
                        </Swiper>
                    }
                    { projeto.imgs.length === 1 &&
                        <img src={projeto.imgs[0]} alt={projeto.title} className="rounded-2xl w-80 h-48 object-cover" />
                    }
                </div>

                <p className="text-white sf-pro-display text-sm text-left">{projeto.description}</p>
            </div>
    )
}
        