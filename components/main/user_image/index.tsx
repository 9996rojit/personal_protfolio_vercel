import Image from 'next/image';
import React from 'react';
import my_image from '../../../assets/images/my_image.jpg';

const index: React.FC = () => {
  return (
    <div>
      <Image
        src={my_image}
        alt="User image"
        height={625}
        width={675}
        objectFit={'cover'}
      />
    </div>
  );
};

export default index;
