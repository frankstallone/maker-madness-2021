import React from 'react';
import { NavLink } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PageTemplate from '../components/PageTemplate';
const OYO = () => {
  return (
    <>
      <PageHero
        supHeader="Maker Madness"
        mainHeader="OYO - On-Your-Own Activities"
        subHeader="No need to leave your cozy house. Try these activities with materials you can probably find around your home!"
      />
      <PageTemplate>
        <p>The following “On Your Own (OYO)” projects were were put together by the MAPSO MAKERS, a FIRST® LEGO® League robotics team made up of 8th grade girls from South Orange Middle School. All of these projects should be able to be completed with materials around the house, including what’s in your recycling bins!</p>
        <ul>
          <li>
            <NavLink to={`/oyo01`}>OYO #1 - Fidget Spinner</NavLink>
          </li>
          <li>
            <a href="https://coolscienceexperimentshq.com/bouncy-egg/">OYO #2 - The Bouncing Egg Experiment!</a>
          </li>
          <li>
            <a href="https://www.scitech.org.au/experiment/invisible-fire-extinguisher/">OYO #3 - Invisible Fire Extinguisher</a>
          </li>
          <li>
            <a href="https://www.scientificamerican.com/article/build-a-wind-powered-car/">OYO #4 - Wind Powered Car</a>
          </li>
          <li>
            <a href="https://www.learner.org/series/project-playbook-educator-edition/balloon-race/">OYO #5 - Balloon Races</a>
            <NavLink to={`/takemake05`}>OYO #5 - Balloon Races</NavLink>
          </li>
        </ul>
      </PageTemplate>
    </>
  );
};

export default OYO;
