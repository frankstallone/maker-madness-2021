import React from 'react';

import img01 from '../../img/tnm05/OhCanaryLogo.jpg';
import img02 from '../../img/tnm05/step1.png';
import img03 from '../../img/tnm05/step2.png';
import img04 from '../../img/tnm05/step3.png';
import img05 from '../../img/tnm05/step4.png';

import PageHero from '../../components/PageHero';
import PageTemplate from '../../components/PageTemplate';
import ShowNTell from '../../components/ShowNTell';

const TakeMake05 = () => {
  return (
    <>
      <PageHero
        supHeader="Take&amp;Make #5"
        mainHeader="Craftstick & Watercolor Sculpture"
      />
      <PageTemplate>
        <a href="https://www.ohcanary.com/">
          <img className="mx-auto w-56" src={img01} alt="Step" />
        </a>
        <h2>Step 1</h2>
        <p>
          Connect your craft sticks one at a time. Dip a craft stick into the
          wood glue to apply the glue to each connection.
        </p>
        <img className="mx-auto" src={img02} alt="Step" />
        <h2>Step 2</h2>
        <p>
          Press each craft stick joint with your finger after gluing for a
          couple of seconds before moving to the next.
        </p>
        <img className="mx-auto" src={img03} alt="Step" />
        <h2>Step 3</h2>
        <p>
          Make as many connections as you can to build up a composition! The
          more you can connect both sides of the craft stick to each other, the
          stronger your sculpture will be.
        </p>
        <img className="mx-auto" src={img04} alt="Step" />
        <h2>Step 4</h2>
        <p>
          Paint with the watercolor palette by dipping the brush into the water
          and then the paint. Once you have painted the whole structure, wait to
          dry and then tie up with the string.
        </p>
        <img className="mx-auto" src={img05} alt="Step" />
        <p className="text-center">
          <a href="https://www.ohcanary.com/" className="link">
            www.ohcanary.com @ohcanaryart 165 Valley Street South Orange
          </a>
        </p>
        <h4>Please show us what you made!</h4>
        <ShowNTell />
      </PageTemplate>
    </>
  );
};

export default TakeMake05;
