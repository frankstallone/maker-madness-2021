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
      link:
        'https://www.google.com/maps/d/u/0/embed?mid=1LxiTbqjOyQAXWyO-VENAZ_rDdFup71om&hl=en&ll=40.735985987960035%2C-74.26857065&z=15',
      linkText: 'Get Directions',
    },
    {
      name: 'OYO (OnYourOwn)',
      to: '/oyo',
      description: 'Do projects just with materials you can prob find @home',
    },
    {
      name: 'Meet the Bees',
      to: '#',
      description: 'Come buzz with a real bee colony (Coming soon)',
    },
    {
      name: 'Live Demos',
      to: '#',
      description:
        'Come see on outside woodworking demonstration by the creator of Maplewoodshop (Coming soon)',
    },
    {
      name: 'CodeJoy',
      to: '#',
      description:
        'Learn to code online with friendly, connected cardboard robots (Coming soon)',
    },
    {
      name: 'Code.org',
      to: '#',
      description:
        'Or try other code challenges for all age levels (Coming soon)',
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
              <div className="m-0">
                <p className="m-0">
                  <p className="font-medium text-gray-900">
                    <NavLink to={link.to}>{link.name}</NavLink>
                  </p>
                  <p className="text-gray-500">
                    {link.description}
                    {link.link ? (
                      <a className="btn" href={link.link}>
                        {link.linkText}
                      </a>
                    ) : null}
                  </p>
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
