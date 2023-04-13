import React from 'react';
import { useParams } from 'react-router-dom';

const ProductScreen = () => {
  const params = useParams();
  // eslint-disable-next-line no-unused-vars
  const { slug } = params;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
};

export default ProductScreen;
