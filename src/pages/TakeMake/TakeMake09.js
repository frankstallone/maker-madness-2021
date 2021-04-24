import React from 'react';

import img01 from '../../img/tnm09/img1.png';
import img02 from '../../img/tnm09/img2.png';
import img03 from '../../img/tnm09/img3.png';
import img04 from '../../img/tnm09/img4.png';
import img05 from '../../img/tnm09/img5.png';
import img06 from '../../img/tnm09/img6.jpeg';
import img07 from '../../img/tnm09/img7.jpeg';
import img08 from '../../img/tnm09/img8.jpg';

import PageHero from '../../components/PageHero';
import PageTemplate from '../../components/PageTemplate';

const TakeMake09 = () => {
  return (
    <>
      <PageHero
        supHeader="Take&amp;Make #9"
        mainHeader="Graham Cracker House"
      />
      <PageTemplate>
        <h3>Instructions</h3>
         
        <p><strong>Step 1</strong> - Gently break apart graham crackers into 6 squares.
        </p>
        <p>
        <strong>Step 2</strong> - To assemble the houses, squeeze a generous line of icing along the side of a cracker and place two pieces together like this:
        </p> 
        <img className="mx-auto" src={img01} alt="Steps 1&2" />

        <p><strong>Step 3</strong> - Continue in this way until all four sides of the house are erected. For best results, let icing “glue” dry (approximately 30 minutes).</p>

        <p><strong>Step 4</strong> - Assemble the roof like in the photo below and let it dry before attempting to place it atop the house.</p>
        <img className="mx-auto" src={img02} alt="Steps 3&4" />

        <p><strong>Step 5</strong> - When you put the roof on, there will be a little open space. If you’d like, you can use a sharp, serrated knife and very lightly cut another cracker to fill in that triangular space. Of course, you can also leave that space open if you prefer.</p>

        <img className="mx-auto" src={img03} alt="Step 5" />

        <p><strong>Step 6</strong> - Attach the triangular piece (if using) and the roof using a generous amount of icing. (Can you tell which house is mine and which is the photo I got off the internet?! lol)</p>
        <img className="mx-auto" src={img04} alt="Step 4" />
        <img className="mx-auto" src={img05} alt="Step 5" />

        <p><strong>Step 7</strong> - Now that the engineering is finished, now comes the creative part; find some candy and use the remainder of the icing to decorate your house. Here are some ideas, but you can do anything you like.</p>

        <img className="mx-auto" src={img06} alt="Step 6" />
        <img className="mx-auto" src={img07} alt="Step 7" />

        <p>For additional fun, if you can find some gummy bears, you can have them live in the house you've just built.</p>

        <img className="mx-auto" src={img08} alt="Step 7" />

      </PageTemplate>
    </>
  );
};

export default TakeMake09;
