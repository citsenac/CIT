// import { useEffect, useState } from "react";
import { register } from 'swiper/element/bundle';
import Conhecimentos from "./components/Conhecimentos/Conhecimentos";
import Contato from './components/Contato/Contato';
import Depoimentos from './components/Depoimentos/Depoimentos';
import Equipe from './components/Equipe/Equipe';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projetos from "./components/Projetos/Projetos";
import SobreNos from "./components/SobreNos/SobreNos";
import './styles/main.css';
// import { auth, fetchCITData, signInWithEmailAndPassword } from "./firebase";

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

  // const [citData, setCITData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const email = import.meta.env.VITE_FIREBASE_AUTH_EMAIL;
  // const password = import.meta.env.VITE_FIREBASE_AUTH_PASSWORD;

  // useEffect(() => {
  //   const authenticateAndFetchData = async () => {
  //     try {
  //       // Authenticate cit
  //       const userCredential = await signInWithEmailAndPassword(auth, email, password);
  //       const user = userCredential.user;
  //       console.log("Authenticated successfully");

  //       // Fetch cit data from the root of the database
  //       const data = await fetchCITData(user.uid);
  //       setCITData(data);
  //     } catch (authError) {
  //       console.error("Authentication error:", authError);
  //       setError(authError);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   authenticateAndFetchData();
  // }, []);

  // if (citData) {
  //   console.log(citData);
  // }
  // if (loading) {
  //   console.log(loading);
  // }
  // if (error) {
  //   console.log(error);
  // }

  return (
    <main className="bg-gradient-to-b from-[#232323] via-[#262626] via-63% to-[#161017] min-h-screen overflow-x-hidden">
      {/* {!loading &&
      <> */}
      <Navbar sections={sections} />
      <Header />
      <SobreNos target={sections[0].target} />
      <Projetos target={sections[1].target} />
      <Conhecimentos target={sections[2].target} />
      <Depoimentos target={sections[3].target} />
      <Equipe target={sections[4].target} />
      <Contato target={sections[5].target} />
      {/* </>} */}
    </main>
  )
}

export default App
