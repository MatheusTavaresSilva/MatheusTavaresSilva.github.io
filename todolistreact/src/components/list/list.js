import React from 'react';
import ListElement from './list-element/list.element'


const List = (props) => props.tasks.map(tasks =>{
    return(
    <ListElement key = {tasks.id}
    status = {tasks.status}
    Event = {props.Event}
    >
    {tasks.task}
    </ListElement>)
    })


export default List;