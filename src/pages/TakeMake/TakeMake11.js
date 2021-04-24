import React from 'react';

import img01 from '../../img/tnm11/img1.png';
import img02 from '../../img/tnm11/img2.png';
import img03 from '../../img/tnm11/img3.png';
import img04 from '../../img/tnm11/img4.png';
import img05 from '../../img/tnm11/img5.png';
import img06 from '../../img/tnm11/img6.png';
import img07 from '../../img/tnm11/img7.png';
import img08 from '../../img/tnm11/img8.png';
import img09 from '../../img/tnm11/img9.png';
import img10 from '../../img/tnm11/img10.png';
import img11 from '../../img/tnm11/img11.png';

import PageHero from '../../components/PageHero';
import PageTemplate from '../../components/PageTemplate';
import ShowNTell from '../../components/ShowNTell';

const TakeMake11 = () => {
  return (
    <>
      <PageHero
        supHeader="Take&amp;Make #11"
        mainHeader="Ping Pong Ball Catapult Engineering"
      />
      <PageTemplate>
        <h3>Popsicle Stick Catapult</h3>
        <p>
          This activity allows you to build a catapult in two different ways
          (easy and more complicated). We supplied a ping pong ball, but if you
          have multiple different things you can launch, you can predict and
          test out which flies the farthest and determine why! You can change
          how tight you make the rubber bands on the lever and see if that makes
          a difference. You might even want to measure how far you can launch
          different objects using a ruler or measuring tape. So why is a
          catapult able to launch things so far? When you pull back the popsicle
          stick, potential energy, or "resting" energy gets stored up. And when
          you release the stick, the potential energy turns into kinetic energy,
          "moving" energy! Then gravity eventually pulls the launched object
          back to the ground. Make an easy catapult, take it apart and try the
          complicated one!
        </p>

        <h3>Easy Catapult</h3>
        <p>
          <strong>Step 1</strong> - Make a stack of 10 popsicle sticks and tie
          them together using two rubber bands, one at each end.
        </p>
        <img className="mx-auto" src={img01} alt="Step 1" />

        <p>
          <strong>Step 2</strong> - Take 1 more plain popsicle stick and the
          stick with the rubber gasket and and tie them together at the end
          without the gasket using one rubber band about a ½ inch from the end
          of the sticks. Make sure the gasket is facing out.
        </p>
        <img className="mx-auto" src={img02} alt="Step 2" />

        <p>
          <strong>Step 3</strong> - Insert the big stack of popsicle sticks
          between the other two and push it up close to the rubber band end
        </p>
        <img className="mx-auto" src={img03} alt="Step 3" />

        <p>
          <strong>Step 4</strong> - Put the ping pong ball on the gasket, pull
          back the stick and let it fly!
        </p>

        <h3>More Complicated Catapult</h3>
        <p>
          <strong>Step 1</strong> - Take two sticks, make a V with the bottoms
          slightly crossed over and tie together with 1 rubber band. Repeat this
          with two more sticks so you have two Vs.
        </p>
        <img className="mx-auto" src={img04} alt="Step 4" />

        <p>
          <strong>Step 2</strong> - Take 4 popsicle sticks and set them up in a
          square with the ends crossed over. Tie each corner off with a rubber
          band.
        </p>
        <img className="mx-auto" src={img05} alt="Step 5" />

        <p>
          <strong>Step 3</strong> - Attached the Vs from step 1 to the square in
          step two with a few more rubber bands at the corners. This is your
          catapult base.
        </p>
        <img className="mx-auto" src={img06} alt="Step 6" />

        <p>
          <strong>Step 4</strong> - Place 1 popsicle stick across the top of the
          catapult base and one across the bottom. Tie them on with rubber
          bands.
        </p>
        <img className="mx-auto" src={img07} alt="Step 7" />

        <p>
          <strong>Step 5</strong> - Weave the the popsicle stick with the gasket
          through the sticks you placed in step 4. Place the rubber band around
          the base of the gasket stick and around the far corners of the base.
        </p>
        <img className="mx-auto" src={img08} alt="Step 8" />
        <img className="mx-auto" src={img09} alt="Step 9" />

        <p>
          <strong>Step 6</strong> - Put the ping pong ball on the gasket, pull
          back the stick and let it fly!
        </p>
        <img className="mx-auto" src={img10} alt="Step 10" />
        <img className="mx-auto" src={img11} alt="Step 11" />
        <h4>Please show us what you made!</h4>
        <ShowNTell />
      </PageTemplate>
    </>
  );
};

export default TakeMake11;
