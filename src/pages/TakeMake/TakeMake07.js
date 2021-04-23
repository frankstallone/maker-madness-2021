import React from 'react';

import img01 from '../../img/tnm07/south_mountain_bee_logo.png';
import img02 from '../../img/tnm07/photo1.png';
import img03 from '../../img/tnm07/photo2.png';

import PageHero from '../../components/PageHero';
import PageTemplate from '../../components/PageTemplate';

const TakeMake07 = () => {
  return (
    <>
      <PageHero supHeader="Take&amp;Make #7" mainHeader="Bee Bath" />
      <PageTemplate>
        <img className="mx-auto" src={img01} alt="Step" />
        <center><h3>Help The Bees</h3></center>
        <img className="mx-auto" src={img02} alt="Step" />
        <h3>How to create a bee bath</h3>
        <h5>What you need</h5>
        <div className="px-8 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
          <ol>

            <li>A container of your choice. The size could be anything between a bird bath and a shallow salad bowl. It could be glass, plastic, concrete, clay, etc. Anything that holds water will do.</li>
            <li>Water.</li>
            <li>A few rock, twigs, acorns, tree bark, dry leaves. It's really your choice. Whatever you have will do.</li>
            <li>A pinch of salt.</li>
            <li>A mosquito donut. You only need a quarter, and it will last you all mosquito season.</li>
            <li>A few drops of lemon grass essential oil (completely optional).</li>
          </ol>
        </div>
        <p><strong>How to do it</strong> - (No mystery here. it's really what you imagine!)</p>
        <p><strong>Step 1</strong> - Fill the container with your rocks, twigs, tree bark, etc.</p>
        <p><strong>Step 2</strong> - Dissolve about a teaspoon of salt in a gallon of water, if your container is small, a pinch of salt will do.</p>
        <p><strong>Step 3</strong> - Pour the water in the container. Make sure rocks or any other garden debris stick out of the water.</p>
        <p><strong>Step 4</strong> - Drop the mosquito donut quarter in the container where it touches the water.</p>
        <p><strong>Step 5</strong> - If you happen to have lemon grass essential oil, put a couple drops on any rock or bark that sticks out of the water.</p>

        <img className="mx-auto" src={img03} alt="Step" />
        <p>Simple, right? You now have a bee bath for the the bees to enjoy.</p>
      </PageTemplate>
    </>
  );
};

export default TakeMake07;
