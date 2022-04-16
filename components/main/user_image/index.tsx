import Image from 'next/image';
import React from 'react';
import { images } from '../../../constant';

const index: React.FC = () => {
  return (
    <div>
      {/* dasdasdasd */}
      <Image
        src={images.mainImage}
        alt="User image"
        height={625}
        width={675}
        objectFit={'cover'}
      />
    </div>
  );
};

export default index;
