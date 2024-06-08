export default function Conhecimentos({target}: {target: string}) {

    return (
        <section id={target} className="relative mt-24">

            <h3 className="text-2xl font-semibold text-white text-center mb-5 poppins">
                Um pouco dos nossos conhecimentos
            </h3>
        
            <div className="relative w-full py-3 flex flex-col gap-y-3 overflow-x-hidden">

                <div className="absolute h-full w-full bg-gradient-to-r from-[#8000FF]/30 via-[#8000FF]/0 via-30% via-[#8000FF]/0 via-70% to-[#8000FF]/30 to-100%"></div>

                <div className="w-full h-10 bg-yellow-200"></div>

                <div className="w-full h-10 bg-yellow-200"></div>

                <div className="w-full h-10 bg-yellow-200"></div>

            </div>

        </section>
    )
    
}