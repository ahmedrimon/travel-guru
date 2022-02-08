import React from 'react';
import './Home.css';
import Navar from '../../../Shared/Navbar/Nabar';
import Hero from './../Hero/Hero';

const Home = () => {
  return (
    <section>
      <article className="bg">
        <Navar />
        <Hero />
      </article>
    </section>
  );
};

export default Home;
