/* eslint-disable @next/next/no-img-element */
import Slider from "~/components/Home/Slider";
import NewsHomePage from "~/components/Home/NewsHomePage";
import AgentSystem from "~/components/Home/AgentSystem";
import Partner from "~/components/Home/Partner";
import Introduction from "~/components/Home/Introduction";
import Services from "~/components/Home/Services";

const Home = () => {
  return (
    <>
      <Slider />
      <Introduction />
      <Services />
      <AgentSystem />
      <Partner />
      <NewsHomePage />
    </>
  );
};

export default Home;
