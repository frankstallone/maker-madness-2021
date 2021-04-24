import React from 'react';
import { NavLink } from 'react-router-dom';

import img01 from '../img/oyo/fll.png';

import PageHero from '../components/PageHero';
import PageTemplate from '../components/PageTemplate';
const OYO = () => {
  const pages = [
    {
      name: 'OYO #1',
      to: '/oyo01',
      description: 'Fidget Spinner',
    },
    {
      name: 'OYO #2',
      to: '/oyo02',
      description: 'Bouncing Egg Experiment',
    },
    {
      name: 'OYO #3',
      to: '/oyo03',
      description: 'Invisible Fire Extinguisher',
    },
    {
      name: 'OYO #4',
      to: '/oyo04',
      description: 'Wind Powered Car',
    },
    {
      name: 'OYO #5',
      to: '/oyo05',
      description: 'Balloon Races',
    },
  ];
  return (
    <>
      <PageHero
        supHeader="Maker Madness"
        mainHeader="OYO - On-Your-Own Activities"
        subHeader="No need to leave your cozy house. Try these activities with materials you can probably find around your home!"
      />
      <PageTemplate>
        <p>
          The following “On Your Own (OYO)” projects were were put together by
          the MAPSO MAKERS, a FIRST® LEGO® League robotics team made up of 8th
          grade girls from South Orange Middle School. All of these projects
          should be able to be completed with materials around the house,
          including what’s in your recycling bins!
        </p>
        <ul className="page-lists divide-y divide-indigo-400">
          {pages.map((page) => (
            <li key={page.name} className="py-4 flex">
              <div className="m-0 w-full">
                <p className="font-medium text-gray-900 text-center">
                  <NavLink to={page.to}>{page.name}</NavLink>
                </p>
                <p className="text-gray-500 text-center">{page.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <a href="https://www.firstlegoleague.org">
          <img className="mx-auto" src={img01} alt="First Lego League" />
        </a>
        <p>
          If you are a K-8 student in the SOMSD community and have interest in
          coding, robotics, community projects or just playing with LEGO bricks,
          you may want to learn more!
        </p>
        <p>
          This community team runs outside of the school system by Maplewood dad
          Brad Schenker and SOMS middle school choir teacher Jake Ezzo. Email{' '}
          <a href="mailto:MAPSOFLL@gmail.com" className="link">
            MAPSOFLL@gmail.com
          </a>{' '}
          for more information!
        </p>
      </PageTemplate>
    </>
  );
};

export default OYO;
