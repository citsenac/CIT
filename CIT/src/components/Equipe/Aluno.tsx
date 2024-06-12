export default function Aluno({aluno}: {aluno: {id: string, img: string, nome: string, linkedin: string}}) {
    return(
        <div className="flex flex-col items-center w-full h-80 relative">
            <img src={aluno.img} alt="Imagem do aluno" className="w-full h-full object-cover rounded-xl" />
            <div className="absolute w-full py-3 px-6 bottom-0 rounded-b-xl text-white flex justify-between">
                <div className="w-full h-full bg-[#454545]/60 backdrop-blur-md absolute left-0 top-0 rounded-b-xl"></div>
                <span className="text-white relative z-1 text-sm poppins font-medium">{aluno.nome}</span>
                <a href={aluno.linkedin} className="relative z-1">
                    <img src="icons/linkedin.svg" alt="Ícone do Linkedin" />
                </a>
            </div>
        </div>
    )
}