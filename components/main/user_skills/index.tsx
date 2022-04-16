import Image from 'next/image';
import React from 'react';
import { images } from '../../../constant/';

const index: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      {[
        images.react,
        images.redux,
        images.git,
        images.graphql,
        images.javascript,
        images.sass,
        images.typescript,
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg w-14 flex items-center justify-center"
          style={{
            position: 'absolute',
            top: `${index !== 0 ? index * 90 : 30}px`,
            left: `${index % 2 === 0 ? index * 25 : 15}px`,
            right: `${index % 2 === 1 ? index * 40 : 0}px`,
          }}
        >
          <Image src={item.src} alt="User image" height={40} width={40} />
        </div>
      ))}
    </div>
  );
};

export default index;
