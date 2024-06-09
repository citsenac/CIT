export default function Projeto({projeto, toggleModal}: {projeto: {id: string, imgs: string[], title: string, description: string}, toggleModal: (projeto: {id: string, imgs: string[], title: string, description: string}) => void}) {
    return (
        <a href="#projetos" onClick={() => toggleModal(projeto)} className="h-36 w-56 bg-red-500 rounded-2xl">
            <img src="test-img.png" alt={projeto.title} className="h-full w-full object-cover" />
        </a>
    )
}