import React from 'react';
import { NavLink } from 'react-router-dom';

import img01 from '../img/oyo/fll.png';

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

        <a href="https://www.firstlegoleague.org">
          <img className="mx-auto" src={img01} alt="First Lego League" />
        </a>
        <p>
If you are a K-8 student in the SOMSD community and have interest in coding, robotics, community projects or just playing with LEGO bricks, you may want to learn more!</p>
        <p>
This community team runs outside of the school system by Maplewood dad Brad Schenker and SOMS middle school choir teacher Jake Ezzo. Email MAPSOFLL@gmail.com for more information!</p>

      </PageTemplate>
    </>
  );
};

export default OYO;
