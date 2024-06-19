import Projeto from '../../models/Projeto';

export default function ProjetoComponent({projeto, toggleModal}: {projeto: Projeto, toggleModal: (projeto: Projeto) => void}) {
    return (
        <div onClick={() => toggleModal(projeto)} className="h-36 w-full rounded-2xl cursor-pointer">
            <img src={projeto.imgs[0]} alt={projeto.title} className="h-full w-full rounded-2xl object-cover" />
        </div>
    )
}