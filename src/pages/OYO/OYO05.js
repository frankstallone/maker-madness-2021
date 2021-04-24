import React from 'react';

import img01 from '../../img/oyo/img3.png';

import PageHero from '../../components/PageHero';
import PageTemplate from '../../components/PageTemplate';

const OYO01 = () => {
  return (
    <>
      <PageHero supHeader="OYO - OnYourOwn #1" mainHeader="Balloon Races" />
      <PageTemplate>
        <p>
          Get your kids in the competitive spirit and see who can build the best
          balloon vehicle. Have your students design a racer to attach to a
          balloon. Anything they can create is great, as funky as they want to
          be. We hope to see propeller planes and furry creatures.
        </p>
        <h2>Materials</h2>
        <div className="px-8 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
          <ul>
            <li>Balloons</li>
            <li>Straws</li>
            <li>String</li>
            <li>Tape</li>
            <li>Your homemade vehicle</li>
          </ul>
        </div>

        <h2>Objective</h2>
        <p>
          To be able to design a balloon-powered vehicle to study the motion of
          unbalanced and balanced forces.
        </p>

        <h2>Directions</h2>
        <h4>Step 1</h4>
        <p>
          Build the track by attaching a string to the wall with a thumbtack or
          tape. Hold the other end of the string and walk to the far side of the
          room.
        </p>
        <h4>Step 2</h4>
        <p>Attach the straw and balloon to your racer.</p>
        <h4>Step 3</h4>
        <p>Thread the end of the string through the straw.</p>
        <h4>Step 4</h4>
        <p>
          After threading the string, inflate the balloon and, 3,2,1, LET GO!
        </p>

        <img className="mx-auto" src={img01} alt="Balloon Races" />

        <h2>Fun Facts</h2>
        <ul>
          <li>
            Balloons were invented for military use and to conduct scientific
            experiments in the 1820.
          </li>
          <li>When a balloon is popped, the noise it make is a sonic boom.</li>
          <li>A 100-foot-diameter balloon can lift 33,000 pounds!</li>
        </ul>
        <p>
          <a href="https://www.learner.org/series/project-playbook-educator-edition/balloon-race/">
            Project Link - Balloon Races
          </a>
        </p>
      </PageTemplate>
    </>
  );
};

export default OYO01;
