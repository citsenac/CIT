export default function Projeto({projeto, toggleModal}: {projeto: {id: string, imgs: string[], title: string, description: string}, toggleModal: (projeto: {id: string, imgs: string[], title: string, description: string}) => void}) {
    return (
        <div onClick={() => toggleModal(projeto)} className="h-36 w-56 rounded-2xl cursor-pointer">
            <img src="test-img.png" alt={projeto.title} className="h-full w-full object-cover" />
        </div>
    )
}