import React from 'react';

import ProductCard from './components';

import cover from './assets/Gone_with_the_Wind.jpg';

export type ProductCardProps = {
  title: string;
  origin: string;
  price: number;
  currencies: string[];
  imageUrl: string;
};

function App() {
  const data: ProductCardProps = {
    title: 'Gone with the wind',
    origin: 'USA',
    price: 34900,
    currencies: ['RUB','USD','EUR'],
    imageUrl: cover,
  };

  return (
    <React.Fragment>
      <ProductCard {...data}/>
    </React.Fragment>
  )
};

export default App;
