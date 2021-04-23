import React from 'react';

import img01 from '../../img/tnm06/Maplewoodshop_logo.png';
import img02 from '../../img/tnm06/mask_rack.jpeg';

import PageHero from '../../components/PageHero';
import PageTemplate from '../../components/PageTemplate';

const TakeMake06 = () => {
  return (
    <>
      <PageHero
        supHeader="Take&amp;Make #6"
        mainHeader="Mask Rack / Bracelet Rack"
      />
      <PageTemplate>
        <a href="https://www.maplewoodshop.com">
          <img className="mx-auto w-56" src={img01} alt="Step" />
        </a>

        <p><strong>Step 1</strong> - Sand any rough edges using the sandpaper.</p>
        <p><strong>Step 2</strong> - Set the board on a flat surface like a table.</p>
        <p><strong>Step 3</strong> - Gently twist and push the thinner dowel through the board.</p>
        <p><strong>Step 4</strong> - Feel underneath to make sure the end of the dowel and the board are flush (at the same level).</p>
        <p><strong>Step 5</strong> - Gently twist the larger dowel onto the thinner dowel until it too is flush with the top of the thinner dowel.</p>
        <img className="mx-auto" src={img02} alt="Step" />

        <p>If your rack is slipping, you can use a small amount of glue to connect any of the pieces.</p>
      </PageTemplate>
    </>
  );
};

export default TakeMake06;
