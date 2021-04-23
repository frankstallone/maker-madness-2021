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
        <h3 className="text-lg">Saturday, April 24th, 10-2pm.</h3>
        <h4>Activities</h4>
        <ul>
          <li>
            <NavLink to={`/takemake`}>
              <strong>Take&amp;Make</strong>
            </NavLink>
            &nbsp;- Pick up project bags around South Orange &amp; Maplewood.&nbsp;  
            <a href="https://www.google.com/maps/d/u/0/embed?mid=1LxiTbqjOyQAXWyO-VENAZ_rDdFup71om&hl=en&ll=40.735985987960035%2C-74.26857065&z=15">
              <button class="bg-pink-500 text-white active:bg-pink-600 font-bold text-base px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                Map Here
              </button>
            </a>
          </li>
          <li>
            <NavLink to={`/oyo`}>
              <strong>OYO (OnYourOwn)</strong>
            </NavLink>
            &nbsp;- Do projects just with materials
            you can prob find @home
          </li>
          <li>
            <strong>Meet the Bees</strong> - Come buzz with a real bee colony
          </li>

          <li>
            <strong>Geo-Caching</strong> - Grab your bike, scooter, or Dad's car ;>) and get to know South Orange and Maplewood in a whole new way.&nbsp;

            <a href="https://sites.google.com/view/makermadness2021-geo-caching">
              <button class="bg-pink-500 text-white active:bg-pink-600 font-bold text-base px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                Start Here
              </button>
            </a>
          </li>
          <li>
            <strong>Live Demos</strong> - Come see on outside woodworking
            demonstration by the creator of Maplewoodshop
          </li>
          <li>
            <strong>CodeJoy</strong> - Learn to code online with friendly,
            connected cardboard robots
          </li>
        </ul>
      </PageTemplate>
    </>
  );
};

export default Home;
