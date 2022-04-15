import React from 'react';

/* Styles */
import './ListItem.css';

const ListItem = props => (
    <div id={props.id} className={`list-items ${props.color}`}>
        {props.children}
    </div>
);

export default ListItem;