import { Swiper, SwiperSlide } from 'swiper/react';

export default function ModalProjeto({projeto}: {projeto: {id: number, imgs: string[], title: string, desc: string}}) {
    
    return (
            
            <div className="text-center w-full h-full">
                <h3 className="mb-4 max-w-56 mx-auto font-semibold bg-gradient-to-br from-white to-[#C9C9C9] text-transparent bg-clip-text inline-block text-2xl text-center poppins">{projeto.title}</h3>
                <div className='relative w-full flex justify-center items-center mb-6'>
                    { projeto.imgs.length > 1 &&
                        <Swiper className="w-full" slidesPerView={1} loop={true} centeredSlides={true} pagination={true}>
                            {projeto.imgs.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <img src={img} alt={projeto.title} className="rounded-2xl w-80 sm:mx-auto md:w-full h-48 md:h-80 object-cover" />
                                </SwiperSlide>
                            ))
                        }
                        </Swiper>
                    }
                    { projeto.imgs.length === 1 &&
                        <img src={projeto.imgs[0]} alt={projeto.title} className="rounded-2xl w-80 md:w-full h-48 md:h-80 object-cover" />
                    }
                </div>

                <p className="text-white sf-pro-display text-sm text-left">{projeto.desc}</p>
            </div>
    )
}
        