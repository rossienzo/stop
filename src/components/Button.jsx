import React from 'react';
import './Button.css';

const Button = props => (
    <button className='btn' onClick={props.generate}>
        {props.text}
    </button>
)

export default Button;
