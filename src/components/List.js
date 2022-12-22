import React from 'react';
import ListItem from './List/ListItem';
import '../css/List.css';

export default function List({ userList, showThisTask }) {
    const renderList = userList.map((task) => {
        return (
            <ListItem
                key={task.id}
                title={task.title}
                id={task.id}
                showThisTask={showThisTask}
                selected={task.selected}
                description={task.description}
                completed={task.completed}
            />
        );
    });
    return (
        <div className="List app-container">
            <div className="list-header">Task List</div>
            <div className="list-content">
                {userList.length === 0 ? (
                    <div className="empty">Empty</div>
                ) : (
                    renderList
                )}
            </div>
        </div>
    );
}
