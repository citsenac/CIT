
export default function ModalProjeto({projeto}: {projeto: {imgs: string[], title: string, description: string}}) {
    
    return (
            
            <div className="text-center w-full h-full">
                <h3 className="mb-4 max-w-56 mx-auto font-semibold bg-gradient-to-br from-white to-[#C9C9C9] text-transparent bg-clip-text inline-block text-2xl text-center poppins">{projeto.title}</h3>
                <div className='relative w-full flex justify-center items-center mb-6'>
                    { projeto.imgs.length > 1 &&
                        <swiper-container class="w-full" slides-per-view={1} loop={true} centered-slides={true} pagination={true}>
                            {projeto.imgs.map((img, i) => (
                                <swiper-slide key={i}>
                                    <img src={img} alt={projeto.title} className="rounded-2xl w-80 md:w-full h-48 md:h-80 object-cover" />
                                </swiper-slide>
                            ))
                        }
                        </swiper-container>
                    }
                    { projeto.imgs.length === 1 &&
                        <img src={projeto.imgs[0]} alt={projeto.title} className="rounded-2xl w-80 md:w-full h-48 md:h-80 object-cover" />
                    }
                </div>

                <p className="text-white sf-pro-display text-sm text-left">{projeto.description}</p>
            </div>
    )
}
        