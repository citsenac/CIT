import { CSSProperties } from "react";

export default function GlassContainer({children, addStyle}: {children: React.ReactNode, addStyle?: CSSProperties}) {
    return (
        <div className="box-border bg-[#989898] bg-opacity-30 rounded-2xl border-solid border-2 border-[#989898] glass-container-shadow w-auto" style={addStyle}>
            {children}
        </div>
    )
}