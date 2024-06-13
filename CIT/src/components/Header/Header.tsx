import GlassContainer from "../Partials/GlassContainer";

export default function Header() {
    return (
        <header className="md:mt-28">
            <h3 className="relative z-1 glitch-trans text-xs flex items-center justify-center gap-x-4 text-glow">
                <img src="logo-cit.svg" alt="Logo do CIT" className="w-5 h-6 md:w-7 md:h-8" />
                <span className="text-white font-bold text-xs md:text-2xl">Centro de Inovação e Tecnologia</span>
            </h3>

            <h2 data-glitch="Lorem Ipsum is simply dummy text of the printing." className="mb-12 relative z-1 text-[2rem] md:text-8xl font-semibold text-white text-center max-w-64 md:max-w-4xl mx-auto glitch-move">
                Lorem Ipsum is simply dummy text of the printing.
            </h2>

            <div className="max-w-56 md:max-w-56 mx-auto text-center">
                <GlassContainer>
                    <a href="#contato" className="w-full block py-4 px-9 font-medium poppins text-sm text-white">
                            Mande um e-mail
                    </a>
                </GlassContainer>

                <span className="text-[0.65rem] md:text-xs text-center text-[#808080] poppins">
                    Ou conheça um pouco sobre nós
                </span>
            </div>
        </header>
    )
}