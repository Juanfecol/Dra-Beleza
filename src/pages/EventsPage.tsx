import React from 'react';
import { Events } from '../../components/Events';
import { motion } from 'motion/react';

export const EventsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      <Events />
    </motion.div>
  );
};
