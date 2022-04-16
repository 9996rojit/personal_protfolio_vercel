import React from 'react';
import { motion } from 'framer-motion';
import { UserInfo } from './user_info/userInfo';
import UserImage from './user_image/';
import UserSkills from './user_skills';

const index: React.FC = () => {
  return (
    <motion.section className="flex h-screen">
      {/* This is for Your description section */}
      <motion.div className="flex basis-1/4 items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
        <UserInfo />
      </motion.div>
      {/* This section is for your image and stuff if you want to provide it */}
      <motion.div className="flex basis-2/4 ">
        <UserImage />
      </motion.div>
      {/* This section is from  your skills that you have done and language you have learned */}
      <motion.div className="flex basis-1/4 bg-gradient-to-r from-sky-500 to-indigo-500">
        <UserSkills />
      </motion.div>
    </motion.section>
  );
};

export default index;
