export default function Disciplinar({funcionario} : {funcionario: {id: string, img: string, nome: string}}) {
    return (
        <div className="flex flex-col items-center w-full h-80 relative border-2 border-solid border-[#989898] rounded-xl">
            <img src={funcionario.img} alt="Imagem do funcionario" className="w-full h-full object-cover rounded-xl" />
            <div className="absolute w-full py-3 px-6 bottom-0 rounded-b-xl text-white flex justify-between">
                <div className="w-full h-full bg-[#454545]/60 backdrop-blur-md absolute left-0 top-0 rounded-b-xl"></div>
                <span className="text-white relative z-1 text-sm poppins font-medium">{funcionario.nome}</span>
            </div>
        </div>
    )
}