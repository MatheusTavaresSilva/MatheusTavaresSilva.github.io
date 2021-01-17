import React from 'react';
import ListElement from './list-element/list.element'


const List = (props) => props.tasks.map((tasks, index) =>{
    return(
    <ListElement key = {tasks.id}
    status = {tasks.status}
    EventPositive = {() => props.EventPositive(index)}
    EventExclude = {() => props.EventExclude(index)}
    >
    {tasks.task}
    </ListElement>)
    })


export default List;