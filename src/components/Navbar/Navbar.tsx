import { useState } from "react";
import scrollLock from "scroll-lock";
export default function Navbar({sections}: {sections: {name: string, target: string}[]}) {
    const [open, setOpen] = useState(false);

    scrollLock.enablePageScroll();

    if (open) {
        scrollLock.disablePageScroll();
    } else {
        scrollLock.enablePageScroll();
    }

    const toggleMenu = () => {
        setOpen( prev => {
                return !prev
            }
        );
    }

    return (
        <div className="w-full p-6 md:p-0 md:mt-12">

            {/* Desktop navbar */}
            <nav className="hidden fixed left-1/2 -translate-x-1/2 z-50 navbar md:flex items-center justify-between px-9 py-2 gap-x-12 sf-pro-display mx-auto max-w-4xl w-full max-h-12 box-border bg-[#989898] bg-opacity-30 rounded-2xl border-solid border-2 border-[#989898] backdrop-blur-md glass-container-shadow">
                <img src="./logo-cit.svg" alt="Logo do CIT" className="w-8 h-8" />
                <ul className="nav-links flex items-center justify-between sf-pro-display text-base text-white flex-1 gap-x-12">
                    {sections.map((section: {name: string, target: string}) => {
                        return (
                            <li className="h-full p-1 rounded-full relative flex justify-center items-center" key={section.name}>
                                <div className="absolute w-full h-full scale-150 rounded-full"></div>
                                <a href={`#${section.target}`} className="w-full h-full block peer relative z-1 nav-link">
                                    {section.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {/* Mobile navbar */}
            <button className="md:hidden" onClick={toggleMenu}>
                <img src="./icons/hamb-nav.svg" alt="Ícone do menu" className="w-8 h-8" />
            </button>

            { open && (
                <>
                    <div onClick={toggleMenu} className="navbar-mobile-backscreen h-screen w-screen absolute top-0 left-0 bg-black/40 z-40"></div>

                    <nav className="navbar-mobile absolute z-50 top-0 left-0 w-2/3 p-6 h-screen bg-gradient-to-b from-[#232323] to-[#262626]">
                        <button onClick={toggleMenu} className="mb-10">
                            <img src="./icons/hamb-nav.svg" alt="Ícone do menu" className="w-8 h-8" />
                        </button>

                        <ul className="sf-pro-display text-sm text-white">
                            {sections.map((section: {name: string, target: string}) => {
                                return (
                                    <li className="py-6 first:border-t border-b border-solid border-white" key={section.name}>
                                        <a onClick={toggleMenu} className="block w-full" href={`#${section.target}`}>{section.name}</a>
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