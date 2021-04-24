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

const TakeMake08 = () => {

  const links = [
    {
      name: 'Take&Make',
      to: '/takemake',
      description: 'To watch a video on how to do paper quilling...',
      buttons: [
        {
          buttonText: 'Get Instructions',
          link:
            'https://www.xplorably.com/activity-kandinsky-paper-quilling',
        },
      ],
    },
  ];

  return (
    <>
      <PageHero supHeader="Take&amp;Make #8" mainHeader="Paper Quilling" />
      <PageTemplate>

        <a href="https://www.xplorably.com/">
          <img className="mx-auto" src={img07} alt="Step" />
        </a>

        <ul className="page-lists divide-y divide-gray-200">
          {links.map((link) => (
            <li key={link.name} className="py-4 flex">
              <div className="m-0 w-full">
                <p className="text-gray-500">
                  <span className={link.buttons ? 'block mb-4' : null}>
                    {link.description}
                  </span>
                </p>
                <p className="space-y-2">
                  {link.buttons
                    ? link.buttons.map((button) => {
                        return (
                          <a
                            key={button.link}
                            className="btn--secondary"
                            href={button.link}
                          >
                            {button.buttonText}
                          </a>
                        );
                      })
                    : null}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <img className="mx-auto" src={img02} alt="Step" />
        <h4>Kandinsky's Circles - paper quilling</h4>
        <p>
The craft of rolling, twisting and curling strips of paper to create beautiful pictures, is known as quilling. The name comes from a feather quill which was originally used to roll the strips of paper. The exact origins of quilling is a mystery but is thought to be connected with the invention of paper in China around 105 AD. During the Renaissance, French and Italian nuns and monks used quilling to decorate book covers and religious items.
        </p>

        <img className="mx-auto" src={img03} alt="Step" />
        <h4>Artist Profile - Wassily Kandinsky</h4>
        <p>
Wassily Kandinsky was born in Russia on December 16, 1866. Kandinsky became know as one of the founding fathers of a movement called Abstract Art. He thought that art didn’t need a subject but that feelings, music and color alone could be art.
        </p>

        <img className="mx-auto" src={img04} alt="Step" />
        <h4>The Big Idea - abstract art</h4>
        <p>
Abstract art does not represent what the artist is looking at but tries to convey the artists feelings and thoughts using lines, shapes, and colors.
        </p>

        <img className="mx-auto" src={img05} alt="Step" />
        <h4>Paper Quilling - challenge</h4>
        <p>
Create your own Abstract Art using Abstract artist Wassily Kandinsky’s Circle painting as inspiration.
        </p>

        <img className="mx-auto" src={img01} alt="Step" />
        <h4>Key Concepts</h4>

        <h5>Abstract Art</h5>
        <p>
Art that has no subject and uses lines, shapes, and colors to convey emotions.
        </p>

        <h5>Renaissance</h5>
        <p>
Means “rebirth.” It was a period
of time from 14th-17th century in Europe known for a renewed focus on education, science, art, literature and music.
        </p>

        <h5>Quilling</h5>
        <p>
Rolling and gluing thin strips of paper into various shapes to form designs.
        </p>

        <img className="mx-auto" src={img06} alt="Step" />

      </PageTemplate>
    </>
  );
};

export default TakeMake08;
