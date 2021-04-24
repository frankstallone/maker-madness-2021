import React, { useRef, useEffect } from 'react';
import mm_bulb from '../img/mm_bulb_00.png';
import PageTemplate from '../components/PageTemplate';
import { NavLink, useParams } from 'react-router-dom';

const Home = () => {
  const mainHeaderNode = useRef(null);
  let { page } = useParams();

  useEffect(() => {
    mainHeaderNode.current.focus();
  }, [page]);

  const links = [
    {
      name: 'Take&Make',
      to: '/takemake',
      description: 'Pick up project bags around South Orange & Maplewood',
      buttons: [
        {
          buttonText: 'Get Directions',
          link:
            'https://www.google.com/maps/d/u/0/embed?mid=1LxiTbqjOyQAXWyO-VENAZ_rDdFup71om&hl=en&ll=40.735985987960035%2C-74.26857065&z=15',
        },
      ],
    },
    {
      name: 'OYO (OnYourOwn)',
      to: '/oyo',
      description: 'Do projects just with materials you can prob find @home',
    },
    {
      name: 'Meet the Bees',
      description: 'Come to Ritzer Field (behind CHS) from 10am to 2pm to see a real bee colony',
    },
    {
      name: 'Geo-Caching',
      external: true,
      to: 'https://sites.google.com/view/makermadness2021-geo-caching',
      description:
        "Grab your bike, scooter, or Dad's car ;>) and get to know South Orange and Maplewood in a whole new way.",
      buttons: [
        {
          buttonText: 'Start Here',
          link: 'https://sites.google.com/view/makermadness2021-geo-caching',
        },
      ],
    },
    {
      name: 'Live Demos',
      description:
        'Come to Ritzer field (behind CHS) 10am to 2pm to see outside demos of woodworking by the creator of Maplewoodshop, as well as demonstrations of robotics by the FirstLegoLeague robotics team consisting of 8th grade girls from SOMS.'
    },
    {
      name: 'CodeJoy',
      description:
        "Learn to code online with friendly, connected cardboard robots. If you're free on Saturday (4/24) Sign up below.",
      buttons: [
        {
          buttonText: '10AM Class',
          link:
            'https://docs.google.com/forms/d/e/1FAIpQLSeJoHHj0kQYEhG3Gz70BWdthS8nvUeyiUJZ3cXl_3BEqD5HBg/viewform?fbclid=IwAR3vFSuIvmlcHNhgpv6Zba7FsyGScIZ2_ejyLFbI2NEe8-BX0lf1GctxamQ%3E',
        },
        {
          buttonText: '3PM Class',
          link:
            'https://docs.google.com/forms/d/e/1FAIpQLSfYxxnColakWmEkXXb8BaXHH6DLsptpOgZakfjwC3oDlBlE2w/viewform?gxids=7628&fbclid=IwAR300_ERhgTl8W3Yi7hNCCiQZxIw3uo-UVQg18nZBTSfTfmmhWtmrpGkw88%3E',
        },
      ],
    },
  ];

  return (
    <>
      <div className="relative bg-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src={mm_bulb} alt="" />
          <div
            className="absolute inset-0 bg-indigo-900"
            style={{ mixBlendMode: 'multiply' }}
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-200 tracking-wide uppercase">
              @Home edition!
            </p>
            <h1
              ref={mainHeaderNode}
              tabIndex={-1}
              className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl  focus:outline-none focus:ring-8 focus:ring-indigo-600 focus:ring-offset-8 focus:ring-offset-indigo-700"
            >
              Maker Madness 2021
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-300">
              We're taking the event from the CHS cafe to your kitchen table.
            </p>
          </div>
        </div>
      </div>
      <PageTemplate>
        <h2 className="text-lg">Saturday, April 24th, 10-2pm.</h2>
        <h3>Activities</h3>
        <ul className="page-lists divide-y divide-gray-200">
          {links.map((link) => (
            <li key={link.name} className="py-4 flex">
              <div className="m-0 w-full">
                <p className="font-medium text-xl text-gray-900">
                  {link.to ? (
                    link.external ? (
                      <a href={link.to}>{link.name}</a>
                    ) : (
                      <NavLink external={link.external} to={link.to}>
                        {link.name}
                      </NavLink>
                    )
                  ) : (
                    link.name
                  )}
                </p>
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
                            className="btn--secondary2"
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
      </PageTemplate>
    </>
  );
};

export default Home;
