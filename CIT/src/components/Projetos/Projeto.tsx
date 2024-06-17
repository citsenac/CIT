export default function Projeto({projeto, toggleModal}: {projeto: {id: number, imgs: string[], title: string, desc: string}, toggleModal: (projeto: {id: number, imgs: string[], title: string, desc: string}) => void}) {
    return (
        <div onClick={() => toggleModal(projeto)} className="h-36 w-full rounded-2xl cursor-pointer">
            <img src={projeto.imgs[0]} alt={projeto.title} className="h-full w-full rounded-2xl object-cover" />
        </div>
    )
}