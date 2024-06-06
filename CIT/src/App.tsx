import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import SobreNos from "./components/SobreNos/SobreNos"

function App() {

  return (
    <main className="bg-gradient-to-b from-[#232323] via-[#262626] via-63% to-[#161017] min-h-screen">
      <Navbar />
      <Header />
      <SobreNos />
    </main>
  )
}

export default App
