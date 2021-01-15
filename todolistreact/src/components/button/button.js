import React from 'react';
import './button.css'

const Button = (props) =>{

    return(
        <button className={'button ' + props.wichOne} onClick={props.Event}>
            {props.children}
        </button>
    )
}

export default Button;