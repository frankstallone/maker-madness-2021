import React from 'react';

import PageHero from '../../components/PageHero';
import PageTemplate from '../../components/PageTemplate';
import ShowNTell from '../../components/ShowNTell';

const OYO01 = () => {
  return (
    <>
      <PageHero
        supHeader="OYO - OnYourOwn #1"
        mainHeader="The Bouncing Egg Experiment!"
      />
      <PageTemplate>
        <h2>Step 1</h2>
        <p>
          Get a raw egg and carefully place it into a glass or jar. Then fill
          the glass with white vinegar until the egg is completely submerged.
        </p>
        <h2>Step 2</h2>
        <p>
          Leave the egg in the glass for 2-3 days. Each day, check back on the
          egg. Make some observations. Do you notice any changes to the egg? Is
          anything happening to the vinegar? Write down your observations each
          day. After about 3 days the egg will start to become translucent and
          you will know it is ready to move to step 3.
        </p>
        <h2>Step 3</h2>
        <p>
          Carefully remove the egg from the glass and rinse it under some tap
          water. While rinsing the egg, gently rub the outside of the egg and
          the white film will come off leaving you with a translucent egg.
          Examine the egg and make some observations. Does the egg look
          different from when you started the experiment? Does the egg feel
          different? Perhaps you notice that it feels rubbery (like a bouncy
          ball). Write down your observations.
        </p>
        <h2>Step 4</h2>
        <p>
          Over a plate or other container, lift the egg 1-2 inches in the air,
          let go, and watch it bounce. Make some observations. What is happens
          to the egg? Does it bounce? Is this different than what you expected?
        </p>
        <h2>Step 5</h2>
        <p>
          When you are ready for some messy fun, lift the egg a little higher in
          the air and let it go...SPLAT!
        </p>
        <h2>How Does the Bouncy Egg Science Experiment Work</h2>
        <p>
          The egg becomes bouncy as a result of a chemical reaction between the
          eggshell and the vinegar. The eggshell of a chicken egg is made of
          calcium carbonate, and vinegar is a weak acid. If you’ve ever mixed
          baking soda and vinegar together, you know the violent reaction that
          results. The calcium carbonate that makes up the eggshell will react
          with the vinegar the same way baking soda reacts with vinegar (just a
          lot less violently). You know the vinegar and calcium carbonate of the
          eggshell are reacting because of the small bubbles that form around
          the egg when it is placed in the vinegar. These small bubbles are
          carbon dioxide gas, which are the result of the reaction between
          calcium carbonate and vinegar.
        </p>
        <p>
          Once the shell of the egg is gone, all that is left covering the egg
          is a thin membrane. The vinegar begins working on the egg’s membrane.
          The membrane of a chicken egg is selectively permeable. The vinegar is
          able to cross the selectively permeable membrane of the egg through
          osmosis. The vinegar toughens up the membrane of the egg making it
          bouncy!
        </p>

        <a
          href="https://coolscienceexperimentshq.com/bouncy-egg/"
          className="link"
        >
          Project Link - The Bouncing Egg Experiment!
        </a>
        <ShowNTell />
      </PageTemplate>
    </>
  );
};

export default OYO01;
