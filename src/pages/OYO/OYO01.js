import React from 'react';

import img01 from '../../img/oyo/img1.png';
import img02 from '../../img/oyo/img2.png';

import PageHero from '../../components/PageHero';
import PageTemplate from '../../components/PageTemplate';

const OYO01 = () => {
  return (
    <>
      <PageHero supHeader="OYO - OnYourOwn #1" mainHeader="Fidget Spinner" />
      <PageTemplate>
        <h3>Recycled Fidget Spinner Project</h3>
        <h5>Created by Alexa Garrido</h5>
        <p>(Parental supervision suggested)</p>


        <h3>Materials</h3>
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

        <h4>Instructions</h4>
        <p><strong>Step 1</strong> - Gather all the materials and get to a clean workspace.</p>
        <img className="mx-auto" src={img02} alt="Fidget Spinner Template" />
        <p><strong>Step 2</strong> - Using one of the three templates, cut out a fidget spinner shape out of cardboard.</p>
        <p><strong>Step 3</strong> - With parental supervision, poke a hole in the middle of the shape you just cut out with the scissors, and try not to make the hole too big, as the lollipop stick is going to fit in it.</p>
        <p><strong>Step 4</strong> - If you have a marker, or crayon, you can color both sides of the cardboard shape. If you have colored paper instead, then cut two pieces of paper that are the exact same shape as the cardboard and poke a hole in the same place as the hole in the cardboard.</p>
        <p><strong>Step 5</strong> - If you are using crayons or markers, please skip this step. Glue the colored paper on either side of the cardboard, and if you need to fix the hole, please do so.</p>
        <p><strong>Step 6</strong> - Now, poke the lollipop stick through the cardboard, and cut it so about a half of an inch is poking from either side of the cardboard.</p>
        <p><strong>Step 7</strong> - Now, with parental supervision, glue each end of the lollipop stick to the inside middle of a plastic water bottle cap.  </p>
        <p><strong>Step 8</strong> - Now once everything is glued and dried, put one finger on each bottle cap, and spin, and enjoy!</p>

        <img className="mx-auto" src={img01} alt="Fidget Spinner" />

      </PageTemplate>
    </>
  );
};

export default OYO01;
