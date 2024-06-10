export default function Depoimento({id, img, nome, curso, depoimento}: {id: string, img: string, nome: string, curso: string, depoimento: string}){

    return (
        <div className="w-full h-[22rem] bg-[#1C1C1C] pt-4 pl-4 border-2 border-[#989898] rounded-lg flex flex-col">
            <img src={img} alt={nome} className="w-14 aspect-square rounded-full object-cover" />

            <h4 className="mt-4 text-white font-medium sf-pro-display text-base">
                {nome}
            </h4>

            <div className="w-48 flex flex-col items-start text-sm text-white sf-pro-display">
                <div className="p-1 bg-[#5F00D8]/70 rounded">
                    <p className="font-medium text-sm sf-pro-display bg-gradient-to-r from-[#B0B0B0] to-white text-transparent bg-clip-text inline-block text-2xl ">
                        {curso}
                    </p>
                </div>

                <img src="/icons/aspas.svg" alt="Aspas" className="mt-4 w-4" />

                <p className="w-full mt-3">
                    {depoimento}
                </p>
            </div>
        </div>
    )
}