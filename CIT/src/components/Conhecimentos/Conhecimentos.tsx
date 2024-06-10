export default function Conhecimentos({target}: {target: string}) {

    const conhecimentos = ['html', 'css', 'javascrip', 'angular', 'laravel', 'java', 'react', 'inteligência artificial', 'C#', 'python', 'React Native', 'tailwind css', 'MUI', 'Bootstrap', 'SQL', 'ExpressJS', 'MongoDB', 'Adobe', 'Figma', 'Linux', 'JFrame', '.NET', 'SwiftUI', 'Spring', 'Ionic', 'C']
    
    // conhecimentos.length / 3

    const total = Math.ceil(conhecimentos.length / 3);

    const conhecimentosDisplay = [conhecimentos.slice(0, total), conhecimentos.slice(total, total * 2), conhecimentos.slice(total * 2, total * 3)]

    return (
        <section id={target} className="relative mt-24">

            <h3 className="text-2xl font-semibold text-white text-center mb-5 poppins">
                Um pouco dos nossos conhecimentos
            </h3>
        
            <div className="relative py-3 flex flex-col gap-y-3 max-w-full">

                <div className="absolute top-0 h-full w-full bg-gradient-to-r from-[#8000FF]/30 via-[#8000FF]/0 via-30% via-[#8000FF]/0 via-70% to-[#8000FF]/30 to-100%"></div>

                {conhecimentosDisplay.map((conhecimento, index) => (
                    <ul className="w-full flex gap-x-3 overflow-hidden" key={index}>
                        {conhecimento.map((conhecimento, index) => (
                            <li className={`w-auto h-14 text-2xl font-semibold text-white bg-gradient-to-br from-[#351B33] to-[#9B4F96] poppins conhecimentos`} key={index}>{conhecimento}</li>
                        ))}
                    </ul>
                ))}
            </div>

        </section>
    )
    
}