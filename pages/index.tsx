/* eslint-disable @next/next/no-img-element */
import Slider from "~/components/Home/Slider";
import NewsHomePage from "~/components/Home/NewsHomePage";
import AgentSystem from "~/components/Home/AgentSystem";

const Home = () => {
  return (
    <>
      <Slider />

      <AgentSystem />
      <NewsHomePage />
    </>
  );
};

export default Home;
