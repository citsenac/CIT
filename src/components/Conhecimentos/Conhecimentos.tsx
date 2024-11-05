import Stack from "../../models/Stack";
import useWindowDimensions from "../Utils/WindowDimensions";

export default function Conhecimentos({target, conhecimentos}: {target: string, conhecimentos: Stack[]}) {

    // Get window width to set animation content
    const { width } = useWindowDimensions();
    
    // Split conhecimentos in groups of 3
    const total = Math.ceil(conhecimentos.length / 3);

    const conhecimentosDisplay = [conhecimentos.slice(0, total), conhecimentos.slice(total, total * 2), conhecimentos.slice(total * 2, total * 3)]

    // Reduce motion check
    let scrollabe: boolean = false;

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        scrollabe = true;
    }

    const termBuscado = "java";
    const corL = "#6692FF";
    const corR = "#FF30FF";

    return (
        <section id={target} className="relative pt-24">

            <h3 className="text-2xl font-semibold text-white text-center mb-5 poppins">
                Um pouco dos nossos conhecimentos
            </h3>
        
            <div className="relative py-3 flex flex-col gap-y-3 max-w-full scroller" data-animated={scrollabe ? "true" : 'false'}>

                {conhecimentosDisplay.map((conhecimentoGroup, index) => (
                    // bg-gradient-to-br from-[#303030] to-[#494949]
                    <ul className="w-full flex flex-wrap scroller-inner odd:self-end" key={index}>
                        {conhecimentoGroup.map((conhecimento) => (
                            <li className={`capitalize min-w-fit rounded-lg p-2 flex items-center justify-center gap-x-3 h-10 text-sm font-semibold text-white  border-solid border-[.5px] border-[#A5A5A5] poppins`} key={conhecimento.id}
                                style={{ background: conhecimento.nome.toLowerCase().includes(termBuscado.toLowerCase()) ? `linear-gradient(to right, ${corL} 0%, ${corR} 100%)` : `linear-gradient(to right, #303030 0%, #494949 100%)`}}>
                                <img src={conhecimento.icon} alt="Stack icon" className="w-6 h-6" />
                                {conhecimento.nome}
                            </li>
                        ))}

                        {/* Duplicate to make scroll effect */}
                        {scrollabe && conhecimentoGroup.map((conhecimento) => (
                            <li className={`capitalize min-w-fit rounded-lg p-2 flex items-center justify-center gap-x-3 h-10 text-sm font-semibold text-white border-solid border-[.5px] border-[#A5A5A5] poppins`} key={conhecimento.id}
                            style={{ background: conhecimento.nome.toLowerCase().includes(termBuscado.toLowerCase()) ? `linear-gradient(to right, ${corL} 0%, ${corR} 100%)` : `linear-gradient(to right, #303030 0%, #494949 100%)`}}>
                            <img src={conhecimento.icon} alt="Stack icon" className="w-6 h-6" />
                            {conhecimento.nome}
                        </li>
                        ))}

                        {/* Triplicate to make scroll effect in larger screens */}
                        {scrollabe && width > 1024 && conhecimentoGroup.map((conhecimento) => (
                            <li className={`capitalize min-w-fit rounded-lg p-2 flex items-center justify-center gap-x-3 h-10 text-sm font-semibold text-white border-solid border-[.5px] border-[#A5A5A5] poppins`} key={conhecimento.id}
                            style={{ background: conhecimento.nome.toLowerCase().includes(termBuscado.toLowerCase()) ? `linear-gradient(to right, ${corL} 0%, ${corR} 100%)` : `linear-gradient(to right, #303030 0%, #494949 100%)`}}>
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