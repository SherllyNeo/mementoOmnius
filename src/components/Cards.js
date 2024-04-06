import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Training games</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='images/skeleton.jpeg'
              text='Memorise as many numbers as possible'
              label='Numbers'
              path='/train/numbers'
            />
            </ul> 

        </div>
      </div>
    </div>
  );
}

export default Cards;
