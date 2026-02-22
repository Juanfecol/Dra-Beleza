import React, { useEffect } from 'react';
import { Contact } from '../../components/Contact';
import { motion } from 'motion/react';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <Contact />
    </motion.div>
  );
};
