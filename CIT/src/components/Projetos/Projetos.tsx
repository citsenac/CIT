import { useState } from 'react';
import scrolllock from 'scroll-lock';
import Modal from '../Partials/Modal';
import useWindowDimensions from '../Utils/WindowDimensions';
import ModalProjeto from './ModalProjeto';
import Projeto from './Projeto';

export default function Projetos({target}: {target: string}) {
    const projetos: {id: string, imgs: string[], title: string, description: string}[] = [
        {id:'0', imgs: ["test-img.png", "test-img.png", "test-img.png"], title: "Projeto 1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
        {id:'1', imgs: ["test-img.png"], title: "Projeto 2", description: "Descricão do projeto 2"},
        {id:'3', imgs: ["test-img.png", "test-img.png", "test-img.png"], title: "Projeto 4", description: "Descricão do projeto 4"},
        {id:'4', imgs: ["test-img.png", "test-img.png", "test-img.png"], title: "Projeto 3", description: "Descricão do projeto 3"},
        {id:'5', imgs: ["test-img.png", "test-img.png", "test-img.png"], title: "Projeto 3", description: "Descricão do projeto 3"},
        {id:'6', imgs: ["test-img.png", "test-img.png", "test-img.png"], title: "Projeto 3", description: "Descricão do projeto 3"},
        {id:'7', imgs: ["test-img.png", "test-img.png", "test-img.png"], title: "Projeto 3", description: "Descricão do projeto 3"},
        {id:'8', imgs: ["test-img.png", "test-img.png", "test-img.png"], title: "Projeto 3", description: "Descricão do projeto 3"},
        {id:'9', imgs: ["test-img.png", "test-img.png", "test-img.png"], title: "Projeto 3", description: "Descricão do projeto 3"},
        {id:'10', imgs: ["test-img.png", "test-img.png", "test-img.png"], title: "Projeto 3", description: "Descricão do projeto 3"},
    ];
    const { height, width } = useWindowDimensions();

    const [open, setOpen] = useState(false);

    const [projeto, setProjeto] = useState({imgs: [''], title: '', description: ''});

    const toggleModal = (projeto: {imgs: string[], title: string, description: string}) => {
        setOpen( prev => {
                return !prev
            }
        );

        setProjeto(() => {
                return  projeto
            }
        );

    }

    if (open) {
        scrolllock.disablePageScroll();
    } else {
        scrolllock.enablePageScroll();
    }

    return (
        <section id={target} className="relative mt-24">

            <h3 className="text-2xl md:text-5xl font-semibold text-white text-center mb-8 max-w-64 md:max-w-2xl mx-auto poppins">
                Dê uma olhada nos nossos projetos
            </h3>

            <div className="w-full box-border bg-[#989898] bg-opacity-30 border-y-2 border-solid border-[#989898] py-12">
                <swiper-container
                    class="w-full"
                    space-between={30}
                    slides-per-view={width < 768 ? 1.5 : (width < 1024 ? 3.5 : 4.5)}
                    centered-slides={true}
                    loop={true}
                >
                    {projetos.map((projeto) => (
                            <swiper-slide key={projeto.id}>
                                    <Projeto toggleModal={() => toggleModal(projeto)} projeto={projeto} />
                            </swiper-slide>
                        ))
                    }
                </swiper-container>
            </div>

            { open && <Modal toggleModal={() => toggleModal(projeto)}>
                <ModalProjeto projeto={projeto} />
            </Modal>}
        </section>
    )
}