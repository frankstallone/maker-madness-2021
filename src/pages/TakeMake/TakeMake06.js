import React from 'react';

import img01 from '../../img/tnm06/Maplewoodshop_logo.png';
import img02 from '../../img/tnm06/mask_rack.jpeg';

import PageHero from '../../components/PageHero';
import PageTemplate from '../../components/PageTemplate';
import ShowNTell from '../../components/ShowNTell';

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

        <h2>Step 1</h2>
        <p>Sand any rough edges using the sandpaper.</p>
        <h2>Step 2</h2>
        <p>Set the board on a flat surface like a table.</p>
        <h2>Step 3</h2>
        <p>Gently twist and push the thinner dowel through the board.</p>
        <h2>Step 4</h2>
        <p>
          Feel underneath to make sure the end of the dowel and the board are
          flush (at the same level).
        </p>
        <h2>Step 5</h2>
        <p>
          Gently twist the larger dowel onto the thinner dowel until it too is
          flush with the top of the thinner dowel.
        </p>
        <img className="mx-auto" src={img02} alt="Step" />

        <p>
          If your rack is slipping, you can use a small amount of glue to
          connect any of the pieces.
        </p>

        <ShowNTell />
      </PageTemplate>
    </>
  );
};

export default TakeMake06;
