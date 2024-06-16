export default function Projeto({projeto, toggleModal}: {projeto: {id: number, img: string[], title: string, desc: string}, toggleModal: (projeto: {id: string, imgs: string[], title: string, desc: string}) => void}) {
    return (
        <div onClick={() => toggleModal(projeto)} className="h-36 w-full rounded-2xl cursor-pointer">
            <img src="test-img.png" alt={projeto.title} className="h-full w-full object-cover" />
        </div>
    )
}