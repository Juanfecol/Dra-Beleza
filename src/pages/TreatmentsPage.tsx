import React from 'react';
import { Services } from '../../components/Services';
import { motion } from 'motion/react';

export const TreatmentsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      <Services hideAcademy />
    </motion.div>
  );
};
