export default function Contato({target}: {target: string}) {
    return (

        

        <section id={target} className="relative mt-24 px-2">
            {/*
            Grid style to desktop
            .parent {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: repeat(4, 1fr);
                grid-column-gap: 0px;
                grid-row-gap: 0px;
                }

            .div1 { grid-area: 1 / 1 / 3 / 3; }
            .div2 { grid-area: 3 / 1 / 5 / 3; }
            .div3 { grid-area: 1 / 3 / 5 / 5; }*/}

            {/*
            Grid style to mobile
            .parent {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(6, 1fr);
                grid-column-gap: 0px;
                grid-row-gap: 0px;
            }

            .div1 { grid-area: 1 / 1 / 3 / 3; }
            .div2 { grid-area: 3 / 1 / 5 / 3; }
            .div3 { grid-area: 5 / 1 / 7 / 3; }
            */}
            <h3 className="text-2xl font-semibold text-center text-white mb-2 mx-auto poppins">
                Entre em contato com a gente
            </h3>

            <form action="" className="w-full mt-6">
                <div className="flex flex-col gap-y-2 mb-6 relative">
                    <label htmlFor="nome" className="text-white poppins font-semibold text-lg ml-4">
                        Nome
                    </label>
                    <input required type="text" name="nome" id="nome" placeholder="Nome" className="w-full bg-[#D9D9D9] focus:outline-[#5D5D5D] focus:outline-1 rounded-lg p-4 text-[868686] font-semibold text-[10px] poppins" />
                </div>
                <div className="flex flex-col gap-y-2 mb-6">
                    <label htmlFor="email" className="text-white poppins font-semibold text-lg ml-4 relative">
                        E-mail
                    </label>
                    <input required type="email" name="e-mail" id="email" placeholder="email@gmail.com" className="w-full bg-[#D9D9D9] focus:outline-[#5D5D5D] focus:outline-1 rounded-lg p-4 text-[868686] font-semibold text-[10px] poppins" />
                </div>
                <button className="w-full mb-6 font-medium text-xs poppins">
                    Enviar
                </button>
            </form>
        </section>
    )
}