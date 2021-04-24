import React from 'react';
import { NavLink } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PageTemplate from '../components/PageTemplate';

const TakeNMake = () => {
  const pages = [
    {
      name: 'Take&Make #1',
      to: '/takemake01',
      description: 'Puppet Making',
    },
    {
      name: 'Take&Make #2',
      to: '/takemake02',
      description: 'Lightbulb Paper Circuit',
    },
    {
      name: 'Take&Make #3',
      to: '/takemake03',
      description: 'Origami Cicadas',
    },
    {
      name: 'Take&Make #4',
      to: '/takemake04',
      description: 'Kinetic Popsicle Sticks',
    },
    {
      name: 'Take&Make #5',
      to: '/takemake05',
      description: 'Craftstick & Watercolor Sculpture',
    },
    {
      name: 'Take&Make #6',
      to: '/takemake06',
      description: 'Mask Rack / Bracelet Rack',
    },
    {
      name: 'Take&Make #7',
      to: '/takemake07',
      description: 'Bee Bath',
    },
    {
      name: 'Take&Make #8',
      to: '/takemake08',
      description: 'Paper Quilling',
    },
    {
      name: 'Take&Make #9',
      to: '/takemake09',
      description: 'PaperGraham Cracker House',
    },
    {
      name: 'Take&Make #10',
      to: '/takemake10',
      description: 'Play-Doh Dinosaur Zoo',
    },
    {
      name: 'Take&Make #11',
      to: '/takemake11',
      description: 'Ping Pong Ball Catapult Engineering',
    },
  ];
  return (
    <>
      <PageHero
        supHeader="Maker Madness"
        mainHeader="Take&amp;Make Activities"
        subHeader="Pick up bags of materials to make projects @home!"
      />
      <PageTemplate>
        <p>
          Grab your free Take&amp;Make bags at participating locations and head
          home to mess up your kitchen table instead of ours. 😆
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
      </PageTemplate>
    </>
  );
};

export default TakeNMake;
