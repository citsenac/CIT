export default function Modal({children, toggleModal}: {children: React.ReactNode, toggleModal: () => void}) {
        
    return (
       <>
            <div onClick={toggleModal} className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            </div>
    
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 z-50 h-[26rem] w-[95%] bg-gradient-to-b from-[#404042] to-[#303030] rounded-2xl border-2 border-[#989898] pb-4 pt-6 px-4">
                <button onClick={toggleModal} className="absolute top-4 right-4">
                    <img src="/icons/close-white.svg" alt="Fechar modal" className="w-6 h-6" />
                </button>
                {children}
            </div>
       </>
    )
}