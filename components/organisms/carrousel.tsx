import React from 'react';
import { recordType } from '../../database/data';
import Card from '../molecules/card';

const Carrousel = ({cards}: {cards: recordType[]}) => {
  return (
    <div className='flex items-center justify-center flex-row flex-wrap'>
      {
        cards.map((movie) =>
          <Card key={movie.id}>{movie.title}</Card> )
      }
    </div>
  );
};

export default Carrousel;