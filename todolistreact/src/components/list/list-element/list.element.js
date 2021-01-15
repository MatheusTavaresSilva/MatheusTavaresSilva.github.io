import React from 'react';
import './list.element.css';
import Button from '../../button/button';

//Fachek svg
import { GoCheck } from 'react-icons/go';
//Delete svg
import { AiFillDelete } from 'react-icons/ai';
//ReloadSVG
import { AiOutlineReload } from 'react-icons/ai';

const ListElement = (props) => {
    return(
        <li className={'listElement ' + props.status}>
            {props.children}
            
            <div className = 'buttons'>

            <Button wichOne = 'positive' Event = {props.Event}>

            {props.status === "done"?<AiOutlineReload/>:<GoCheck/>}

            </Button>

            <Button wichOne = 'exclude' Event = {props.Event}>

                <AiFillDelete/>
                
            </Button>
            </div>
        </li>
    )
}

export default ListElement;