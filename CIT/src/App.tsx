// import { useEffect, useState } from "react";
import { useState } from 'react';
import { register } from 'swiper/element/bundle';
import Conhecimentos from "./components/Conhecimentos/Conhecimentos";
import Contato from './components/Contato/Contato';
import Depoimentos from './components/Depoimentos/Depoimentos';
import Equipe from './components/Equipe/Equipe';
import Footer from './components/Footer/Footer';
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

  const [loadingPage, setLoadingPage] = useState(true);

  // const [citData, setCITData] = useState(null);
  // const [loadingDb, setLoadingDb] = useState(true);
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
  //       setLoadingDb(false);
  //     }
  //   };
  //   authenticateAndFetchData();
  // }, []);
  // if (error) {
  //   console.log(error);
  // }

  setTimeout(() => {
    setLoadingPage(false);
  }, 4000);

  return (
    <main className="bg-gradient-to-b from-[#232323] via-[#262626] via-63% to-[#161017] min-h-screen overflow-x-hidden">
      {loadingPage && 
        <div className="w-full h-screen flex items-center justify-center">
          {/* <video className="max-h-96 w-auto aspect-video object-cover" src="cit-loading.mp4" autoPlay muted loop></video> */}
          <img src="logo-cit.svg" alt="" className='w-[10rem] aspect-square' />
        </div>
      }
      {!loadingPage &&
      <>
        <Navbar sections={sections} />
        <Header />
        <SobreNos target={sections[0].target} />
        <Projetos target={sections[1].target} />
        <Conhecimentos target={sections[2].target} />
        <Depoimentos target={sections[3].target} />
        <Equipe target={sections[4].target} />
        <Contato target={sections[5].target} />
        <Footer />
      </>}
    </main>
  )
}

export default App
