import useWindowDimensions from "../Utils/WindowDimensions";

export default function Conhecimentos({target}: {target: string}) {

    const conhecimentos = ['html', 'css', 'javascript', 'angular', 'laravel', 'java', 'react', 'inteligência artificial', 'C#', 'python', 'React Native', 'tailwind css', 'MUI', 'Bootstrap', 'SQL', 'ExpressJS', 'MongoDB', 'Adobe', 'Figma', 'Linux', 'JFrame', '.NET', 'SwiftUI', 'Spring', 'Ionic', 'C']

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

                {conhecimentosDisplay.map((conhecimento, index) => (
                    <ul className="w-full flex flex-wrap scroller-inner odd:self-end" key={index}>
                        {conhecimento.map((conhecimento, index) => (
                            <li className={`capitalize min-w-fit p-2 flex items-center justify-center gap-x-3 h-10 text-sm font-semibold text-white bg-gradient-to-br from-[#351B33] to-[#9B4F96] poppins`} key={index}>
                                <img src="test-icon-stacks.svg" alt="Stack icon" className="w-6 h-6" />
                                {conhecimento}
                            </li>
                        ))}

                        {/* Duplicate to make scroll effect */}
                        {scrollabe && conhecimento.map((conhecimento, index) => (
                            <li aria-hidden="true" className={`capitalize min-w-fit p-2 flex items-center justify-center gap-x-3 h-10 text-sm font-semibold text-white bg-gradient-to-br from-[#351B33] to-[#9B4F96] poppins`} key={index}>
                                <img src="test-icon-stacks.svg" alt="Stack icon" className="w-6 h-6" />
                                {conhecimento}
                            </li>
                        ))}
                        {scrollabe && width > 1024 && conhecimento.map((conhecimento, index) => (
                            <li aria-hidden="true" className={`capitalize min-w-fit p-2 flex items-center justify-center gap-x-3 h-10 text-sm font-semibold text-white bg-gradient-to-br from-[#351B33] to-[#9B4F96] poppins`} key={index}>
                                <img src="test-icon-stacks.svg" alt="Stack icon" className="w-6 h-6" />
                                {conhecimento}
                            </li>
                        ))}
                    </ul>
                ))}

                <div className="absolute top-0 h-full w-full portal-gradient "></div>

            </div>

        </section>
    )
    
}