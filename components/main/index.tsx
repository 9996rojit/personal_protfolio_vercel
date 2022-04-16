import React from 'react';
import { motion } from 'framer-motion';

const index: React.FC = () => {
  return (
    <motion.section className="">
      <motion.div className="flex justify-center items-center text-lime-600 font-bold text-xl">
        Full Stack Developer
      </motion.div>
      <motion.div className="flex justify-center items-center text-red-400 font-bold text-lg">
        Rojit Baskota
      </motion.div>
      <motion.div className="flex justify-center items-center text-orange-500 font-bold text-lg">
        Working on Citytech
      </motion.div>
    </motion.section>
  );
};

export default index;
