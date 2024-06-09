export default function ModalProjeto({projeto}: {projeto: {imgs: string[], title: string, description: string}}) {
    return (
            
            <div className="flex flex-col w-full h-full">
                <h3 className="mb-4 max-w-56 mx-auto font-semibold text-white text-2xl text-center poppins">{projeto.title}</h3>
            </div>
    )
}
        