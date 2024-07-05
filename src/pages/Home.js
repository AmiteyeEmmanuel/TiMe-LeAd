import React from 'react';

import Header from '../components/partials/Header';
import HeroHome from '../components/partials/HeroHome';
import FeaturesHome from '../components/partials/Features';
import FeaturesBlocks from '../components/partials/FeaturesBlocks';
import Courses from '../components/partials/Features1';
import Footer from '../components/partials/Footer';
import Community from '../components/partials/community';
import Faq from '../components/partials/FAQ';


function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <Courses/>
        <FeaturesBlocks />
        <Community/>
        <Faq/>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;