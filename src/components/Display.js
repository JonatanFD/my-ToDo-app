import React from 'react';
import Welcome from './Display/Welcome';
import Create from './Display/Create';
import Edit from './Display/Edit';

export default function Display({
    display,
    createNewTask,
    editDisplayContent,
    isEditing,
    welcomeButton,
    editCreateButton,
    deleteTask,
    saveButton,
    activateEdition,
    completeTask,
    updateTask,
    seeTasksButton
}) {
    return (
        <>
            {display == null ? (
                <Welcome welcomeButton={welcomeButton}/>
            ) : display ? (
                <Create createNewTask={createNewTask} />
            ) : (
                <Edit seeTasksButton={seeTasksButton} updateTask={updateTask} completeTask={completeTask} activateEdition={activateEdition} editDisplayContent={editDisplayContent} isEditing={isEditing} editCreateButton={editCreateButton} deleteTask={deleteTask} saveButton={saveButton}/>
            )}
        </>
    );
}
