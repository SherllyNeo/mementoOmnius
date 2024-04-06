import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Articles() {
  return (
    <div className='cards'>
      <h1>Articles on learning memory techniques</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='images/skeleton.jpeg'
              text='Introduction to memory techniques'
              label='Introduction'
              path='/train/skeleton'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Articles;
