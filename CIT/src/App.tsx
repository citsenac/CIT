import Conhecimentos from "./components/Conhecimentos/Conhecimentos"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Projetos from "./components/Projetos/Projetos"
import SobreNos from "./components/SobreNos/SobreNos"

function App() {

  const sections: {name: string, target: string}[] = [
    {
        name: "Sobre nós",
        target: "sobre-nos"
    },
    {
        name: "Projetos",
        target: "projetos"
    },
    {
        name: "Conhecimentos",
        target: "conhecimentos"
    },
    {
        name: "Depoimentos",
        target: "depoimentos"
    },
    {
        name: "Equipe",
        target: "equipe"
    },
    {
        name: "Contato",
        target: "contato"
    }
  ];

  return (
    <main className="bg-gradient-to-b from-[#232323] via-[#262626] via-63% to-[#161017] min-h-screen overflow-x-hidden">
      <Navbar sections={sections} />
      <Header />
      <SobreNos target={sections[0].target} />
      <Projetos target={sections[1].target} />
      <Conhecimentos target={sections[2].target} />
    </main>
  )
}

export default App
