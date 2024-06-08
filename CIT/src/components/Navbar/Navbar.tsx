import { useState } from "react";
import scrollLock from 'scroll-lock';
export default function Navbar({sections}: {sections: {name: string, target: string}[]}) {
    const [open, setOpen] = useState(false);

    if (open) {
        scrollLock.disablePageScroll();
    } else {
        scrollLock.enablePageScroll();
    }

    const openMenu = () => {
        setOpen( prev => {
                return !prev
            }
        );
    }

    return (
        <div className="w-full p-6">
            <nav className="hidden md:flex text-red-500 sf-pro-display mx-auto max-w-3xl">
                Sobre nós
            </nav>

            <button className="md:hidden" onClick={openMenu}>
                <img src="/icons/hamb-nav.svg" alt="Ícone do menu" className="w-8 h-8" />
            </button>

            { open && (
                <>
                    <div className="h-screen w-screen absolute top-0 left-0 bg-black/40 z-40"></div>

                    <nav className="absolute z-50 top-0 left-0 w-2/3 p-6 h-screen bg-gradient-to-b from-[#232323] to-[#262626]">
                        <button onClick={openMenu} className="mb-10">
                            <img src="/icons/hamb-nav.svg" alt="Ícone do menu" className="w-8 h-8" />
                        </button>

                        <ul className="sf-pro-display text-sm text-white">
                            {sections.map((section: {name: string, target: string}) => {
                                return (
                                    <li className="py-6 first:border-t border-b border-white" key={section.name}>
                                        <a onClick={openMenu} className="block w-full" href={`#${section.target}`}>{section.name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </>
            )}
        </div>
    )
}