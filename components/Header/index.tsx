import Image from 'next/image';
import React from 'react';
import logo from '../../assets/images/og_logo.png';

const index: React.FC = () => {
  return (
    <div className="w-100 bg-zinc-500 text-white">
      <div className="flex p-2 justify-between">
        <div className="flex justify-center items-center">
          <div className="pl-4">
            <Image src={logo} alt="logo section" width={40} height={40} />
          </div>
          <div className="ml-3 font-medium">Rojit Baskota</div>
        </div>
        {/* //menu Part */}
        <div className="flex justify-center items-center mr-16">
          <div className="">
            <ul className="flex items-center ">
              <li className="pl-2 font-medium cursor-pointer">HOME</li>
              <li className="pl-2 font-medium cursor-pointer">ABOUT</li>
              <li className="pl-2 font-medium cursor-pointer">WORKED ON</li>
              <li className="pl-2 font-medium cursor-pointer">EXPRIENCE</li>
              <li className="pl-2 font-medium cursor-pointer">SKILLS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
