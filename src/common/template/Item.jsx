import React from 'react';

/* Styles */
import './Item.css';

class Item extends React.Component {

    constructor(props) {
        super(props);
        
        this.addLetter = this.addLetter.bind(this);
    }
    
    addLetter(e) 
    {
        if(e.target.classList.contains('selected'))
            e.target.classList.remove('selected')
            
        else
        {
            e.target.classList.add('selected')
        }
    }

    render() 
    {
        return(
            <span className={`item ${this.props.class === undefined ? '' : this.props.class}`} onClick={this.addLetter}>
                {this.props.text}
            </span>
        )
    }
}

export default Item;
