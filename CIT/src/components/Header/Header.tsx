import GlassContainer from "../utils/GlassContainer";

export default function Header() {
    return (
        <header>
            <h3 className="relative z-1 glitch-trans text-xs flex items-center justify-center gap-x-4 text-glow">
                <img src="logo-cit.svg" alt="Logo do CIT" className="w-5 h-6" />
                <span className="text-white font-bold">Centro de Inovação e Tecnologia</span>
            </h3>

            <h2 data-glitch="Lorem Ipsum is simply dummy text of the printing." className="mb-12 relative z-1 text-[2rem] font-semibold text-white text-center max-w-64 mx-auto glitch-move">
                Lorem Ipsum is simply dummy text of the printing.
            </h2>

            <div className="max-w-48 mx-auto text-center">
                <GlassContainer>
                    <a href="#contato" className="w-full block py-4 px-9 poppins text-xs text-white">
                            Mande um e-mail
                    </a>
                </GlassContainer>

                <span className="text-[0.65rem] text-center text-[#808080] poppins">
                    Ou conheça um pouco sobre nós
                </span>
            </div>
        </header>
    )
}