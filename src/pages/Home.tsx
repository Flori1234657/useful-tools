import { Hero, Services, About, Footer } from "../layout";
import { useMainStore } from "../state/mainState";

const Home = () => {
  const language = useMainStore((state) => state.language);

  return (
    <>
      <Hero {...language} />
      <Services {...language} />
      <About {...language} />
      <Footer {...language} />
    </>
  );
};

export default Home;
