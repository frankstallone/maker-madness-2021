import React from 'react';

import PageHero from '../../components/PageHero';
import PageTemplate from '../../components/PageTemplate';
import ShowNTell from '../../components/ShowNTell';

const OYO01 = () => {
  return (
    <>
      <PageHero
        supHeader="OYO - OnYourOwn #1"
        mainHeader="Invisible Fire Extinguisher"
      />
      <PageTemplate>
        <h2>⚠️ Warning</h2>
        <h3>
          This experiment involves fire, so make sure there is a responsible
          adult nearby to supervise. We recommend conducting this experiment
          indoors to avoid any surprise gusts of wind that may interfere with
          your experiment.
        </h3>

        <p>
          Learn how a fire burns and the chemical reaction behind combustion.
          For a fire to burn, three factors must be present: oxygen (O2), fuel,
          and heat, this is called the combustion triangle. Using a few simple
          household ingredients let us show you how to put a flame out without
          touching it!
        </p>
        <h2>Step 1</h2>
        <p>Pour a quarter of a cup of vinegar into the jar.</p>
        <h2>Step 2</h2>
        <p>Light the candle.</p>
        <h2>Step 3</h2>
        <p>
          Add a teaspoon of bicarb soda to the vinegar. Your jar’s contents
          should be fizzing and creating bubbles – these bubbles contain carbon
          dioxide. Put the lid onto your jar immediately to trap the carbon
          dioxide.
        </p>
        <h2>Step 4</h2>
        <p>
          When you’re ready to put out the candle, hold the jar near your candle
          and unscrew the lid, tipping the jar so that the carbon dioxide flows
          out and extinguishes the flame.
        </p>

        <p>
          Did it work? Did you have to put the cup a certain distance from the
          candle? Above it? Below it? Did you experiment with how far away the
          cup could be from the flame?
        </p>

        <h3>Additional Material</h3>

        <ul>
          <li>
            <a
              href="https://www.scitech.org.au/experiment/invisible-fire-extinguisher/"
              className="link"
            >
              Project Link - Invisible Fire Extinguisher
            </a>
          </li>
          <li>
            <a href="https://youtu.be/Y9xbtOBw8nM">
              Check out this video when you're done
            </a>
          </li>
        </ul>
        <ShowNTell />
      </PageTemplate>
    </>
  );
};

export default OYO01;
