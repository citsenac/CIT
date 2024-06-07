import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Projetos from "./components/Projetos/Projetos"
import SobreNos from "./components/SobreNos/SobreNos"

function App() {

  return (
    <main className="bg-gradient-to-b from-[#232323] via-[#262626] via-63% to-[#161017] min-h-screen overflow-x-hidden">
      <Navbar />
      <Header />
      <SobreNos />
      <Projetos />
    </main>
  )
}

export default App
