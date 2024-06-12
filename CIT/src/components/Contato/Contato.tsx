export default function Contato({target}: {target: string}) {
    return (
        <section id={target} className="relative mt-24 px-2">
            <h3 className="text-2xl font-semibold text-center text-white mb-2 mx-auto poppins">
                Entre em contato com a gente
            </h3>

            <form action="" className="w-full mt-6">
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="nome" className="text-white poppins font-semibold text-lg ml-4">
                        Nome
                    </label>
                    <input type="text" name="nome" id="" placeholder="Nome" className="w-full bg-[#D9D9D9] focus:outline-[#5D5D5D] focus:outline-1 rounded-lg p-4 text-[868686] font-semibold text-[10px] poppins" />
                </div>
            </form>
        </section>
    )
}