export default function Footer() {
    return (
        <footer className="w-full bg-[#303030] mt-24 pt-6 pb-3 px-2 flex flex-col jusitfy-center items-center gap-y-6">
            
            {/* Logos */}
            <div className="flex items-center justify-center gap-x-6">
                <img src="logo-senac.svg" alt="Logo do Senac" className="w-18 h-12" />
                <span className="h-12 w-px block bg-white"></span>
                <img src="logo-cit.svg" alt="Logo do CIT" className="w-10 h-12" />
            </div>

            <div className="flex flex-col items-center justify-between text-white sf-pro-display text-sm gap-y-12">
                <p>
                    O CIT é uma extensão dos cursos de tecnologia de graduação oferecidos pelo Centro Universitário Senac, na unidade Nações unidas.
                </p>

                <div className="flex flex-col gap-y-2">
                    <h4 className="font-bold">Endereço</h4>
                    <p>
                        Centro Universitário Senac - Santo Amaro Av. Eng. Eusébio Stevaux, 823.
                        Acadêmico 1 - Sala C151
                    </p>
                </div>

                <span className="text-[#646464]">
                    Copyright © 2024. Todos os Direitos Reservados
                </span>
            </div>
        </footer>
    )
}