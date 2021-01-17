import React from 'react';
import './input.css';
import Button from '../button/button';

import { AiFillSave} from 'react-icons/ai'

const Input = (props) => {

    return(
        <div className = "inputContainer">
            
            <input type = 'text' maxLength = '27' className = 'input' value = {props.value} onChange = {props.onChange}>

            </input>

            <div className='buttons'>
                <Button
                Event = {(event) => props.EventSave(event)}
                wichOne = 'add'>
                    <AiFillSave/>
                </Button>
            </div>
        </div>
    )
}

export default Input;