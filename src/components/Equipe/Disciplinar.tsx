export default function DisciplinarComponent({funcionario} : {funcionario: {id: number, img: string, nome: string, cargo: string}}) {
    return (
        <div className="flex flex-col items-center w-full h-80 relative border-2 border-solid border-[#989898] rounded-xl">
            <img src={funcionario.img} alt="Imagem do funcionario" className="w-full h-full object-cover rounded-xl" />
            <div className="absolute w-full py-3 px-6 bottom-0 rounded-b-xl text-white flex justify-between flex-col">
                <div className="w-full h-full bg-[#454545]/60 backdrop-blur-md absolute left-0 top-0 rounded-b-xl"></div>
                <span className="text-white relative z-1 text-sm poppins font-medium">{funcionario.nome}</span>
                <span className="text-slate-300 relative z-1 text-xs poppins font-medium">{funcionario.cargo}</span>
            </div>
        </div>
    )
}