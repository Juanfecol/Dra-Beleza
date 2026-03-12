import React from 'react';
import { Hero } from '../../components/Hero';
import { About } from '../../components/About';
import { Services } from '../../components/Services';
import { Events } from '../../components/Events';
import { Testimonials } from '../../components/Testimonials';
import { Shop } from '../../components/Shop';
import { Contact } from '../../components/Contact';
import { motion } from 'motion/react';

export const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About isPreview={false} />
      <Services isPreview={false} />
      <Events />
      <Shop />
      <Testimonials />
      <Contact />
    </motion.div>
  );
};
