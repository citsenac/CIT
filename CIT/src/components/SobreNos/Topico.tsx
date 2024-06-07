export default function Topico({children, title, icon}: {children: React.ReactNode, title: string, icon: string}) {
    return (
        <div className="flex flex-col gap-y-5">
            <div className="flex items-center justify-start gap-x-4">
                <img src={icon} alt={title} className="w-6 h-6"/>
                <h3 className="text-white text-2xl font-semibold poppins">
                    {title}
                </h3>
            </div>
            <p className="text-white sf-pro-display text-sm">{children}</p>
        </div>
    )
}