export default function GlassContainer({children}: {children: React.ReactNode}) {
    return (
        <div className="box-border bg-[#989898] bg-opacity-30 rounded-2xl border-2 border-[#989898] glass-container-shadow w-auto">
            {children}
        </div>
    )
}