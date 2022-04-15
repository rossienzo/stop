import React from 'react';

/* Styles */
import './Box.css';

const Box = props => (
    <div className='box'>
        {props.children}
    </div>
);

export default Box;