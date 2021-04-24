import React from 'react';

import img01 from '../../img/tnm08/img1.png';
import img02 from '../../img/tnm08/img2.png';
import img03 from '../../img/tnm08/img3.png';
import img04 from '../../img/tnm08/img4.png';
import img05 from '../../img/tnm08/img5.png';
import img06 from '../../img/tnm08/kandinsky.jpeg';
import img07 from '../../img/tnm08/xporably_logo.png';

import PageHero from '../../components/PageHero';
import PageTemplate from '../../components/PageTemplate';
import ShowNTell from '../../components/ShowNTell';

const TakeMake08 = () => {
  return (
    <>
      <PageHero supHeader="Take&amp;Make #8" mainHeader="Paper Quilling" />
      <PageTemplate>
        <a href="https://www.xplorably.com/">
          <img className="mx-auto" src={img07} alt="Step" />
        </a>
        <p className="text-center">
          <a
            className="btn--secondary"
            href="https://www.xplorably.com/activity-kandinsky-paper-quilling"
          >
            🎥 Video Instructions
          </a>
        </p>

        <img className="mx-auto" src={img02} alt="Step" />
        <h2>Kandinsky's Circles - paper quilling</h2>
        <p>
          The craft of rolling, twisting and curling strips of paper to create
          beautiful pictures, is known as quilling. The name comes from a
          feather quill which was originally used to roll the strips of paper.
          The exact origins of quilling is a mystery but is thought to be
          connected with the invention of paper in China around 105 AD. During
          the Renaissance, French and Italian nuns and monks used quilling to
          decorate book covers and religious items.
        </p>

        <img className="mx-auto" src={img03} alt="Step" />
        <h2>Artist Profile - Wassily Kandinsky</h2>
        <p>
          Wassily Kandinsky was born in Russia on December 16, 1866. Kandinsky
          became know as one of the founding fathers of a movement called
          Abstract Art. He thought that art didn’t need a subject but that
          feelings, music and color alone could be art.
        </p>

        <img className="mx-auto" src={img04} alt="Step" />
        <h2>The Big Idea - abstract art</h2>
        <p>
          Abstract art does not represent what the artist is looking at but
          tries to convey the artists feelings and thoughts using lines, shapes,
          and colors.
        </p>

        <img className="mx-auto" src={img05} alt="Step" />
        <h2>Paper Quilling - challenge</h2>
        <p>
          Create your own Abstract Art using Abstract artist Wassily Kandinsky’s
          Circle painting as inspiration.
        </p>

        <img className="mx-auto" src={img01} alt="Step" />
        <h2>Key Concepts</h2>

        <h3>Abstract Art</h3>
        <p>
          Art that has no subject and uses lines, shapes, and colors to convey
          emotions.
        </p>

        <h3>Renaissance</h3>
        <p>
          Means “rebirth.” It was a period of time from 14th-17th century in
          Europe known for a renewed focus on education, science, art,
          literature and music.
        </p>

        <h3>Quilling</h3>
        <p>
          Rolling and gluing thin strips of paper into various shapes to form
          designs.
        </p>

        <img className="mx-auto" src={img06} alt="Step" />
        <h4>Please show us what you made!</h4>
        <ShowNTell />
      </PageTemplate>
    </>
  );
};

export default TakeMake08;
