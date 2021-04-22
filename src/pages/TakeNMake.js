import React from 'react';
import { NavLink } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PageTemplate from '../components/PageTemplate';

const TakeNMake = () => {
  return (
    <>
      <PageHero
        supHeader="Maker Madness"
        mainHeader="Take&amp;Make Activities"
        subHeader="Pick up bags of materials to make projects @home!"
      />
      <PageTemplate>
        <p>Grab your free Take&Make bags at participating locations and head home
        to mess up your kitchen table instead of ours ;>)</p>
        <ul>
          <li>
            <NavLink to={`/takemake01`}>Take&amp;Make #1 - Puppet Making</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake02`}>Take&amp;NMake #2 - Lightbulb Paper Circuit</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake03`}>Take&amp;NMake #3 - Origami Cicadas</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake04`}>Take&amp;NMake #4 - Kinetic Popsicle Sticks</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake05`}>Take&amp;NMake #5 - Craftstick & Watercolor Sculpture</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake06`}>Take&amp;NMake #6 - Mask Rack / Bracelet Rack</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake07`}>Take&amp;NMake #7 - Bee Bath</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake08`}>Take&amp;NMake #8 - Paper Quilling</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake09`}>Take&amp;NMake #9 - Graham Cracker House</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake10`}>Take&amp;NMake #10 - Play-Doh Dinosaur Zoo</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake11`}>Take&amp;NMake #11 - Ping Pong Ball Catapult Engineering</NavLink>
          </li>
        </ul>
      </PageTemplate>
    </>
  );
};

export default TakeNMake;
