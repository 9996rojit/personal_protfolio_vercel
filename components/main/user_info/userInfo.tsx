import React from 'react';
import { motion } from 'framer-motion';

export const UserInfo: React.FC = () => {
  return (
    <div className="">
      <motion.div className="text-xl font-extrabold text-white">
        Full Stack Developer
      </motion.div>
      <motion.div className="flex text-lg font-bold text-white items-center justify-center">
        Rojit Baskota
      </motion.div>
      <motion.div className="flex text-sm font-bold text-white items-center justify-center">
        Works on CityTech{' '}
      </motion.div>
    </div>
  );
};
