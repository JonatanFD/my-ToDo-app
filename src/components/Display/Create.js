import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppButton from '../AppButton';

import './Create.css';
export default function Create({ createNewTask }) {
    const [createTitle, setCreateTitle] = useState('');
    const [createDescription, setCreateDescription] = useState('');

    const createButton = () => {
        if (createTitle == '' || createDescription == '') {
            return;
        }

        const newItem = {
            title: createTitle.trim(),
            description: createDescription.trim(),
            id: uuidv4(),
            completed: false,
            selected: true,
        };

        createNewTask(newItem);
    };

    const clearInputs = () => {
        setCreateTitle('');
        setCreateDescription('');
    };

    return (
        <div className="Create app-container">
            <div className="create-header">
                <div className="create-header-title">Create your task</div>
                <AppButton icon="clear" text="Clear" action={clearInputs} />
            </div>
            <form className="create-content">
                <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setCreateTitle(e.target.value)}
                    value={createTitle}
                    className="create-content-title"
                    required={true}
                    maxLength={35}
                />
                <div className="create-content-line"></div>
                <textarea
                    cols="30"
                    rows="10"
                    placeholder="Enter a description..."
                    value={createDescription}
                    className="create-content-description"
                    required={true}
                    onChange={(e) => setCreateDescription(e.target.value)}
                ></textarea>

                <div className="create-button">
                    <AppButton
                        icon="create"
                        text="Create"
                        action={createButton}
                        classes="create-content-button"
                    />
                </div>
            </form>
        </div>
    );
}
