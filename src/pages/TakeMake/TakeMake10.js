import React from 'react';

import img01 from '../../img/tnm10/img1.jpg';
import img02 from '../../img/tnm10/img2.jpg';
import img03 from '../../img/tnm10/img3.jpg';
import img04 from '../../img/tnm10/img4.jpg';
import img05 from '../../img/tnm10/img5.jpg';
import img06 from '../../img/tnm10/img6.jpg';
import img07 from '../../img/tnm10/img7.jpg';
import img08 from '../../img/tnm10/img8.jpg';
import img09 from '../../img/tnm10/img9.jpg';
import img11 from '../../img/tnm10/img11.jpg';
import img14 from '../../img/tnm10/img14.jpg';

import PageHero from '../../components/PageHero';
import PageTemplate from '../../components/PageTemplate';

const TakeMake10 = () => {
  return (
    <>
      <PageHero
        supHeader="Take&amp;Make #10"
        mainHeader="Play-Doh Dinosaur Zoo"
      />
      <PageTemplate>

        <h3>How to create a dinosaur zoo</h3>
        <h5>Materials</h5>
        <div className="px-8 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
          <ol>
            <li>Play-Doh</li>
            <li>Paint</li>
            <li>Googly Eyes</li>
            <li>A few rock, sticks, leaves or plants from your back yard</li>
            <li>A piece of cardboard</li>
          </ol>
        </div>
        <img className="mx-auto" src={img02} alt="Step 1" />

        <p>Start with a piece of cardboard.</p>
        <img className="mx-auto" src={img01} alt="Step 1" />

        <p>Paint a simple terrain onto your cardboard; nothing too fancy. It is, after all, 250 million years ago! Maybe a river runs through your zoo and you might add some plants.</p>
        <p>Use paint or a marker to add some areas for each dinosaur.</p>
        <img className="mx-auto" src={img03} alt="Step 2" />

        <p>Now start to make some dinosaurs out of the play-doh. This one is a Triceratops. You can tell by her three horns.</p>
        <img className="mx-auto" src={img04} alt="Step 3" />

        <p>Here is a Stegosaurus, with plates all along his back.</p>
        <img className="mx-auto" src={img05} alt="Step 4" />

        <p>This is an Apatosaurus. My girl is a little small; maybe she's just a baby because later, when she's grown, she'll be larger than all the other dinosaurs. She only eats plants, so she needs that long neck to reach way up into the trees.</p>
        <img className="mx-auto" src={img06} alt="Step 5" />

        <p>You can start to decide which dinosaur goes in each of their zoo areas.</p>
        <img className="mx-auto" src={img07} alt="Step 6" />

        <p>Now I'm making an Ankylosaurus, using a knife to make ridges, first one way, and then the other (perpendicular), to make the bumpy patterns on his back.</p>
        <p>He also has a tail with a big heavy bone at the end of it, to defend himself by swinging it around. I wouldn't want to get hit with that!</p>
        <img className="mx-auto" src={img08} alt="Step 7" />

        <p>Here is a little Tyrannosaurus Rex. He's not very intimidating. Perhaps he is just a T-Rex baby.</p>
        <p>When he's grown, of course, he is the absolute king of the prehistoric jungle! And he's a meat-eater, so we would be just a tasty snack to him! But mine is kind-of friendly.</p>
        <p>He's also got those little tiny front arms, which weren't good for much. They didn't even reach his mouth. I'm not sure how he would brush all those teeth even if he had a modern toothbrush! But he really just didn't need arms. He could run pretty fast on two legs, and with those giant jaws, and strong neck, he could munch on almost any animal he felt like eating.</p>
        <img className="mx-auto" src={img09} alt="Step 8" />

        <p>You can place your dinos in their areas for opening day at the zoo. You might go find some rocks or sticks or plants from your back yard to give the zoo a little more natural texture.</p>

        <p>If you want to, you can Google some of these dinosaurs to see what scientists think they may have looked like. But also, feel free to use your imagination and be creative. Can you imagine other types of animals that haven't been discovered yet? Do you think you might like to be a paleontologist one day? Ther job is to look for dinosaur fossils and try to imagine how they would have lived.</p>
        <p>People sometimes think that dinosaurs didn't adapt very well, since they went extinct, but they were actually amazingly adaptable since they lived on the earth for 165 <i>million</i> years. Humans haven't even been on earth for one million years, so we've got a long way to go before we can prove that we can adapt as well as the dinosaurs.</p>
        <img className="mx-auto" src={img11} alt="Step 10" />
        <p>Enjoy your zoo, and be sure to feed those hungry dinosaurs.</p>
        <img className="mx-auto" src={img14} alt="Step 13" />
      </PageTemplate>
    </>
  );
};

export default TakeMake10;
