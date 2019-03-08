import React from 'react';
import ListItem from './ListItem.js'

const List = (props) =>
  <div className="center vertical" id="list">
    {props.items.map((item, index) => <ListItem item={item} index={index} deleteItem={props.deleteItem} updateItem={props.updateItem}/>)}
  </div>

  export default List