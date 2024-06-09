export default function Projeto({projeto}: {projeto: {id: number, imgs: string[], title: string, description: string}}) {
    return (
        <div className="h-36 w-56 bg-red-500 rounded-2xl">
            <img src="test-img.png" alt={projeto.title} className="h-full w-full object-cover" />
        </div>
    )
}