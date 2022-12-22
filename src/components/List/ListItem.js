import React from 'react';
import {
    BsFillFileEarmarkCheckFill,
    BsFillFileEarmarkXFill,
} from 'react-icons/bs';
import './ListItem.css';

export default function ListItem({
    title,
    id,
    showThisTask,
    selected,
    description,
    completed,
}) {


    if (title.length >= 35 ){
        title=title.substring(0, 30) + "..."
    }
    if (description.length >= 200 ){
        description=description.substring(0, 130) + "..."
    }
    return (
        <div
            className={`list-item ${selected ? 'selected-item' : ''}`}
            onClick={() => {
                showThisTask(id);
            }}
        >
            <div className="list-item-title">
                {completed ? (
                    <BsFillFileEarmarkCheckFill className="list-item-completed" />
                ) : (
                    <BsFillFileEarmarkXFill className="list-item-incompleted" />
                )}
                {title}
            </div>
            <div className="list-item-description">
                <p className='description'>{description}</p>
            </div>
        </div>
    );
}
