import React from 'react';
import PageHero from '../components/PageHero';
import PageTemplate from '../components/PageTemplate';

const Give = () => {
  return (
    <>
      <PageHero supHeader="Maker Madness" mainHeader="Give" />
      <PageTemplate>
        <p className="text-xl">
          Please consider a small contribution to{' '}
          <a
            href="https://achievefoundation.org/donation-form/"
            className="link"
          >
            help out all the activies of The Achieve Foundation.
          </a>
          &nbsp; 🙏🏻
        </p>
      </PageTemplate>
    </>
  );
};

export default Give;
