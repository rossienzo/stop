import React from 'react';

/* Styles */
import './FixedTab.css';

const FixedTab = props => (
    <div id='fixedTab' className={props.class ? 'hidden' : ''} >
        <div className="table-box">
            {props.children}
        </div>
    </div>
);

export default FixedTab;