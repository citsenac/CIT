import useWindowDimensions from "../Utils/WindowDimensions";

export default function Conhecimentos({target, conhecimentos}: {target: string, conhecimentos: {id: number, nome: string, icon: string}[]}) {

    const { width } = useWindowDimensions();
    
    const total = Math.ceil(conhecimentos.length / 3);

    const conhecimentosDisplay = [conhecimentos.slice(0, total), conhecimentos.slice(total, total * 2), conhecimentos.slice(total * 2, total * 3)]

    let scrollabe: boolean = false;

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        scrollabe = true;
    }

    return (
        <section id={target} className="relative pt-24">

            <h3 className="text-2xl font-semibold text-white text-center mb-5 poppins">
                Um pouco dos nossos conhecimentos
            </h3>
        
            <div className="relative py-3 flex flex-col gap-y-3 max-w-full scroller" data-animated={scrollabe ? "true" : 'false'}>

                {conhecimentosDisplay.map((conhecimentoGroup, index) => (
                    <ul className="w-full flex flex-wrap scroller-inner odd:self-end" key={index}>
                        {conhecimentoGroup.map((conhecimento) => (
                            <li className={`capitalize min-w-fit p-2 flex items-center justify-center gap-x-3 h-10 text-sm font-semibold text-white bg-gradient-to-br from-[#303030] to-[#494949] border-solid border-[.5px] border-[#A5A5A5] poppins`} key={conhecimento.id}>
                                <img src={conhecimento.icon} alt="Stack icon" className="w-6 h-6" />
                                {conhecimento.nome}
                            </li>
                        ))}

                        {/* Duplicate to make scroll effect */}
                        {scrollabe && conhecimentoGroup.map((conhecimento) => (
                            <li className={`capitalize min-w-fit p-2 flex items-center justify-center gap-x-3 h-10 text-sm font-semibold text-white bg-gradient-to-br from-[#303030] to-[#494949] border-solid border-[.5px] border-[#A5A5A5] poppins`} key={conhecimento.id}>
                            <img src={conhecimento.icon} alt="Stack icon" className="w-6 h-6" />
                            {conhecimento.nome}
                        </li>
                        ))}
                        {scrollabe && width > 1024 && conhecimentoGroup.map((conhecimento) => (
                            <li className={`capitalize min-w-fit p-2 flex items-center justify-center gap-x-3 h-10 text-sm font-semibold text-white bg-gradient-to-br from-[#303030] to-[#494949] border-solid border-[.5px] border-[#A5A5A5] poppins`} key={conhecimento.id}>
                            <img src={conhecimento.icon} alt="Stack icon" className="w-6 h-6" />
                            {conhecimento.nome}
                        </li>
                        ))}
                    </ul>
                ))}

                <div className="absolute top-0 h-full w-full portal-gradient "></div>

            </div>

        </section>
    )
    
}