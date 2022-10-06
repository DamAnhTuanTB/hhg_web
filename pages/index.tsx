import React from 'react'

import Slider from "~/components/Home/Slider";
import NewsHomePage from "~/components/Home/NewsHomePage";
import AgentSystem from "~/components/Home/AgentSystem";
import Partner from "~/components/Home/Partner";
import Introduction from "~/components/Home/Introduction";
import Services from "~/components/Home/Services";
import CustomerFeedback from "~/components/Home/CustomerFeedback";

const Home: React.FC = () => {
  return (
    <>
      <Slider />
      <Introduction />
      <Services />
      <AgentSystem />
      <Partner />
      <NewsHomePage />
      <CustomerFeedback />
    </>
  );
};

export default Home;
