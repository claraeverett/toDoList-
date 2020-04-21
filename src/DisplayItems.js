import React from 'react';
import './DisplayItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DisplayItems(props){
  const items = props.items;
  const displayItems = items.map(item =>
  {
    return <div className="list" key={item.key}>
      <p> {item.text}
      <span>
        <FontAwesomeIcon className="faicons"
        icon='times'
        onClick={ () => props.deleteItem(item.key)
        }/>
      </span>
      </p>

    </div>
  })
  return(
    <div> {displayItems}</div>
  )
}

export default DisplayItems;
