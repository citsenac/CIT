import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen( prev => {
                return !prev
            }
        );
    }

    return (
        <div className="relative w-full p-6">
            <nav className="hidden md:flex text-red-500 sf-pro-display mx-auto max-w-3xl">
                Sobre nós
            </nav>

            <button onClick={openMenu}>
                <img src="/icons/hamb-nav.svg" alt="Ícone do menu" className="w-8 h-8" />
            </button>

            { open && (
                <nav className="absolute top-0 left-0 w-2/3 p-6 h-screen bg-gradient-to-b from-[#232323] to-[#262626]">
                    <button onClick={openMenu} className="mb-10">
                        <img src="/icons/hamb-nav.svg" alt="Ícone do menu" className="w-8 h-8" />
                    </button>

                    <ul className="sf-pro-display text-sm text-white">
                        <li>Sobre Nós</li>
                    </ul>
                </nav>
            )}
        </div>
    )
}