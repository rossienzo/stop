import React from 'react';

/* Styles */
import './Content.css';

const Content = props => (
    <div id='main-app'>
        {props.children}
    </div>
);

export default Content;