import React from 'react';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

const ListItem = (props) =>
  <div className="item">
    <div>
      <span>{props.index}. {props.item.name}</span>
      <div>Likes: {props.item.likes}</div>
    </div>
    <div>
      <button type="button" onClick={() => props.deleteItem(props.index)}>remove</button>
      <button type="button" onClick={() => props.updateItem(props.index)}>like</button>
    </div>
  </div>

export default ListItem;