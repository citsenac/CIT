export default function Modal({children, toggleModal}: {children: React.ReactNode, toggleModal: () => void}) {
        
    return (
       <>
            <div className="fixed top-0 left-0 inset-0 flex items-center justify-center z-50">
                <div onClick={toggleModal} className="fixed inset-0 bg-black/40 z-50">
                </div>
                <div className="relative z-50 h-auto w-[95%] md:w-[80%] lg:w-[50%] bg-gradient-to-b from-[#404042] to-[#303030] rounded-2xl border-solid border-2 border-[#989898] pb-4 pt-6 px-4">
                    <button onClick={toggleModal} className="absolute top-4 right-4">
                        <img src="/icons/close-white.svg" alt="Fechar modal" className="w-6 h-6" />
                    </button>
                    {children}
                </div>
            </div>
       </>
    )
}