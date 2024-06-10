// import { onValue, ref } from "firebase/database";
import { register } from 'swiper/element/bundle'
import Conhecimentos from "./components/Conhecimentos/Conhecimentos"
import Depoimentos from './components/Depoimentos/Depoimentos'
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Projetos from "./components/Projetos/Projetos"
import SobreNos from "./components/SobreNos/SobreNos"
// import { db } from "./firebase";

function App() {

  register();

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

  // const dbUsers = ref(db, 'users');
  // onValue(dbUsers, snapshot => {
  //   const data = snapshot.val()
    
  //   const dataArray = Object.keys(data).map(key => {
  //     return {
  //       id: key,
  //       ...data[key]
  //     };
  //   });

  //   console.log(dataArray);
  // })

  return (
    <main className="bg-gradient-to-b from-[#232323] via-[#262626] via-63% to-[#161017] min-h-screen overflow-x-hidden">
      <Navbar sections={sections} />
      <Header />
      <SobreNos target={sections[0].target} />
      <Projetos target={sections[1].target} />
      <Conhecimentos target={sections[2].target} />
      <Depoimentos target={sections[3].target} />
    </main>
  )
}

export default App
