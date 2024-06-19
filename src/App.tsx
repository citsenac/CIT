import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import Conhecimentos from "./components/Conhecimentos/Conhecimentos";
import Contato from './components/Contato/Contato';
import Depoimentos from './components/Depoimentos/Depoimentos';
import Equipe from './components/Equipe/Equipe';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projetos from "./components/Projetos/Projetos";
import SobreNos from "./components/SobreNos/SobreNos";
import { auth, fetchCITData, signInWithEmailAndPassword } from "./firebase";
import CITData from "./models/CITData";
import './styles/main.css';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

function App() {

  // register Swiper custom elements
  register();


  // Define sections
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

  // Define states
  const [loadingPage, setLoadingPage] = useState(true);

  const [citData, setCITData] = useState(new CITData());
  const [loadingDb, setLoadingDb] = useState(true);
  const [error, setError]: [unknown, React.Dispatch<React.SetStateAction<unknown>>] = useState();
  
  // Authenticate and fetch cit data
  const email = import.meta.env.VITE_FIREBASE_AUTH_EMAIL;
  const password = import.meta.env.VITE_FIREBASE_AUTH_PASSWORD;

  useEffect(() => {
    const authenticateAndFetchData = async () => {
      try {
        // Authenticate cit
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Authenticated successfully");

        // Fetch cit data from the root of the database
        const data: CITData = await fetchCITData();
        setCITData(data);
      } catch (authError: unknown) {
        console.error("Authentication error:", authError);
        setError(authError);
      } finally {
        setLoadingDb(false);
      }
    };
    authenticateAndFetchData();
  }, []);
  if (error) {
    console.log(error);
  }

  // Set Timeout to load page
  setTimeout(() => {
    setLoadingPage(false);
  }, 6100);

  return (
    <main className="bg-gradient-to-b from-[#232323] via-[#262626] via-63% to-[#161017] min-h-screen overflow-x-hidden">
      {/* If is loading and cit data not retrieved, show GIF */}
      {(loadingPage || loadingDb || citData.alunos.length < 1 || citData.projetos.length < 1 || citData.depoimentos.length < 1 || citData.professores.length < 1 || citData.stacks.length < 1) &&
        <div className="w-full h-screen flex items-center justify-center">
          <img src="cit-loading.gif" alt="Logo do CIT carregando" className='w-72 aspect-square' />
        </div>
      }

      {/* If is not loading and cit data retrieved, show content */}
      {!loadingPage && !loadingDb && citData.alunos.length > 0 && citData.projetos.length > 0 && citData.depoimentos.length > 0 && citData.professores.length > 0 && citData.stacks.length > 0 &&
      <>
        <Navbar sections={sections} />
        <Header sections={sections} />
        <SobreNos target={sections[0].target} />
        <Projetos target={sections[1].target} projetos={citData.projetos} />
        <Conhecimentos target={sections[2].target} conhecimentos={citData.stacks} />
        <Depoimentos target={sections[3].target} depoimentos={citData.depoimentos} />
        <Equipe target={sections[4].target} alunos={citData.alunos} professores={citData.professores} />
        <Contato target={sections[5].target} />
        <Footer />
      </>}
    </main>
  )
}

export default App
