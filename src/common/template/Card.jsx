import React from 'react';

/* Styles */
import './Card.css';

const Content = props => (
    <div className='card'>
        {props.children}
    </div>
);

export default Content;