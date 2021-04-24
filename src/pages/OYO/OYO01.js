import React from 'react';

import img01 from '../../img/oyo/img1.png';
import img02 from '../../img/oyo/img2.png';

import PageHero from '../../components/PageHero';
import PageTemplate from '../../components/PageTemplate';
import ShowNTell from '../../components/ShowNTell';

const OYO01 = () => {
  return (
    <>
      <PageHero supHeader="OYO - OnYourOwn #1" mainHeader="Fidget Spinner" />
      <PageTemplate>
        <h2>Recycled Fidget Spinner Project</h2>
        <h3>Created by Alexa Garrido</h3>
        <p>
          <em>Parental supervision suggested</em>
        </p>
        <img className="mx-auto" src={img02} alt="Fidget Spinner Template" />

        <h2>Supplies</h2>
        <div className="px-8 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
          <ul>
            <li>Cardboard</li>
            <li>Two plastic bottle caps •One lollipop stick</li>
            <li>Scissors</li>
            <li>Hot glue</li>
            <li>One lollipop stick</li>
            <li>Colored marker/crayon or colored paper</li>
          </ul>
        </div>

        <h2>Step 1</h2>
        <p>Gather all the materials and get to a clean workspace.</p>

        <h2>Step 2</h2>
        <p>
          Using one of the three templates, cut out a fidget spinner shape out
          of cardboard.
        </p>
        <h2>Step 3</h2>
        <p>
          With parental supervision, poke a hole in the middle of the shape you
          just cut out with the scissors, and try not to make the hole too big,
          as the lollipop stick is going to fit in it.
        </p>
        <h2>Step 4</h2>
        <p>
          If you have a marker, or crayon, you can color both sides of the
          cardboard shape. If you have colored paper instead, then cut two
          pieces of paper that are the exact same shape as the cardboard and
          poke a hole in the same place as the hole in the cardboard.
        </p>
        <h2>Step 5</h2>
        <p>
          If you are using crayons or markers, please skip this step. Glue the
          colored paper on either side of the cardboard, and if you need to fix
          the hole, please do so.
        </p>
        <h2>Step 6</h2>
        <p>
          Now, poke the lollipop stick through the cardboard, and cut it so
          about a half of an inch is poking from either side of the cardboard.
        </p>
        <h2>Step 7</h2>
        <p>
          Now, with parental supervision, glue each end of the lollipop stick to
          the inside middle of a plastic water bottle cap.
        </p>
        <h2>Step 8</h2>
        <p>
          Now once everything is glued and dried, put one finger on each bottle
          cap, and spin, and enjoy!
        </p>

        <img className="mx-auto" src={img01} alt="Fidget Spinner" />
        <ShowNTell />
      </PageTemplate>
    </>
  );
};

export default OYO01;
