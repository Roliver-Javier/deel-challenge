import React from "react";
import { HeaderSection } from "../../components/molecules";
import { WelcomeSection } from "../../components/organisms";

import "./index.css";
import { Autocomplete } from "../../components/molecules/Autocomplete";

export const Home = () => {
  return (
    <div className="container">
      <div className="header_container">
        <div>
            <HeaderSection />
            <Autocomplete debounceTime={500} limit={5} placeholder="Search here!"/>
        </div>
        <WelcomeSection />
      </div>
    </div>
  );
};

export default Home;
