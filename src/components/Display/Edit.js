import { React, useState } from 'react';
import AppButton from '../AppButton';
import './Edit.css';

export const isItSmall = () => {
    if (document.getElementById('root').clientWidth <= 414) {
        return true;
    } else {
        return false;
    }
};

export default function Edit({
    editDisplayContent,
    isEditing,
    editCreateButton,
    activateEdition,

    updateTask,
    completeTask,
    deleteTask,
    seeTasksButton
}) {
    const [editTitle, setEditTitle] = useState(editDisplayContent.title);
    const [editDescription, setEditDescription] = useState(
        editDisplayContent.description
    );

    const saveTask = () => {
        if (editTitle == '' || editDescription == '') {
            alert('Fill in the text areas');
            return;
        }
        const newItem = {
            title: editTitle,
            description: editDescription,
            id: editDisplayContent.id,
        };

        updateTask(newItem);
        activateEdition();
    };

    const renderForm = () => {
        if (isEditing) {
            return (
                <>
                    <input
                        type="text"
                        defaultValue={editTitle}
                        className="edit-content-title"
                        onChange={(e) => {
                            setEditTitle(e.target.value);
                        }}
                        maxLength={38}
                    />
                    <div className="edit-line"></div>
                    <textarea
                        cols="30"
                        rows="10"
                        defaultValue={editDescription}
                        className="edit-content-description"
                        onChange={(e) => {
                            setEditDescription(e.target.value);
                        }}
                    ></textarea>
                    <div className="edit-save-button">
                        <AppButton
                            text="Save"
                            icon="save"
                            action={() => saveTask()}
                        />
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="edit-title">{editDisplayContent.title}</div>
                    <div className="edit-top-line"></div>
                    <textarea
                        cols="30"
                        rows="10"
                        className="edit-description"
                        readOnly={true}
                        value={editDisplayContent.description}
                    ></textarea>
                    <div className="edit-bottom-line"></div>
                    {isItSmall() ? 
                    <AppButton
                    text="See Tasks" 
                    icon='see'
                    action={() => {seeTasksButton()}}
                    /> 
                    : null}
                </>
            );
        }
    };

    return (
        <div className="Edit app-container">
            <div className="edit-header">
                <div className="edit-create">
                    <AppButton
                        icon="create"
                        text="Create new"
                        action={!isEditing ? editCreateButton : null}
                        classes={!isEditing ? '' : 'disable-button'}
                    />
                </div>

                <div className="edit-task-config">
                    <AppButton
                        text={!isEditing ? 'Edit' : 'Discard Changes'}
                        icon="edit"
                        action={() => {
                            activateEdition();
                            setEditTitle(editDisplayContent.title);
                            setEditDescription(editDisplayContent.description);
                        }}
                    />
                    <AppButton
                        text={
                            !editDisplayContent.completed
                                ? 'Complete'
                                : 'Deselect'
                        }
                        icon={!editDisplayContent.completed ? 'check' : 'undo'}
                        action={() => {
                            completeTask(editDisplayContent.id);
                        }}
                        classes="complete-button"
                    />
                    <AppButton
                        text="Delete"
                        icon="del"
                        action={() => {
                            deleteTask(editDisplayContent.id);
                        }}
                        classes="delete-button"
                    />
                </div>
            </div>
            <div className="edit-content">{renderForm()}</div>
        </div>
    );
}
