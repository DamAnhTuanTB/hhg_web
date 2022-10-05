/* eslint-disable @next/next/no-img-element */
import Slider from "~/components/Home/Slider";
import NewsHomePage from "~/components/Home/NewsHomePage";
import AgentSystem from "~/components/Home/AgentSystem";
import Partner from "~/components/Home/Partner";

const Home = () => {
  return (
    <>
      <Slider />

      <AgentSystem />
      <Partner />
      <NewsHomePage />
    </>
  );
};

export default Home;
