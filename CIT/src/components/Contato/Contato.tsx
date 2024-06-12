export default function Contato({target}: {target: string}) {
    return (

        

        <section id={target} className="relative mt-16 px-2 grid grid-cols-2 grid-rows-5">
            {/*
            Grid style to desktop
            .parent {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(6, 1fr);
                grid-column-gap: 0px;
                grid-row-gap: 0px;
                }

            .div1 { grid-area: 1 / 1 / 4 / 2; }
            .div2 { grid-area: 1 / 2 / 7 / 3; }
            .div3 { grid-area: 4 / 1 / 7 / 2; }
            */}

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

            <h3 className="text-2xl font-semibold text-center text-white mx-auto poppins col-span-2 row-span-1 md:col-span-1">
                Entre em contato com a gente
            </h3>
            <form action="" className="w-full col-span-2 row-span-3 md:col-span-1 md:row-span-6">
                <div className="flex flex-col gap-y-2 mb-6 relative">
                        <label htmlFor="nome" className="text-white poppins font-semibold text-lg ml-4">
                            Nome
                        </label>
                        <input required type="text" name="nome" id="nome" placeholder="Nome" className="w-full bg-[#D9D9D9] focus:outline-[#5D5D5D] focus:outline-1 rounded-lg p-4 text-[868686] font-semibold text-xs poppins" />
                    </div>
                    <div className="flex flex-col gap-y-2 mb-6">
                        <label htmlFor="email" className="text-white poppins font-semibold text-lg ml-4 relative">
                            E-mail
                        </label>
                        <div className="relative w-full flex items-center">
                            <input required type="email" name="e-mail" id="email" placeholder="email@gmail.com" className="pl-10 w-full bg-[#D9D9D9] focus:outline-[#5D5D5D] focus:outline-1 rounded-lg p-4 text-[868686] font-semibold text-xs poppins" />
                            <img src="icons/mail.svg" alt="Ícone de envelope de carta" className="absolute left-2 w-6 h-6" />
                        </div>
                    </div>
                <button className="w-full mb-6 py-3 rounded-lg text-white bg-[#410C85] font-medium text-base poppins">
                    Enviar
                </button>
            </form>
            <span className="mt-3 col-span-2 row-span-1 md:col-span-1 sf-pro-display text-white text-lg">
                Ao inserir seu nome e e-mail, receberemos suas informações e entraremos em contato com você o mais breve possível.
            </span>
        </section>
    )
}