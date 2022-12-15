import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
  return (
    items.map(item => 
      <div className='col-md-4' key={item.id}>
        <Item item={item} />
      </div>
      )
  )
}

export default ItemList;