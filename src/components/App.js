import { React, useState } from 'react';
import '../css/App.css';
import Display from './Display';
import List from './List';
import Status from './Status';
import { isItSmall } from './Display/Edit';


const small = isItSmall()
function App() {
    const [userList, setUserList] = useState([]);
    const [display, setDisplay] = useState(null);
    const [editDisplayContent, setEditDisplayContent] = useState({
        title: '',
        description: '',
        id: '',
        completed: false,
    });
    const [isEditing, setIsEditing] = useState(false);

    const showThisTask = (id, updatedList = null) => {
        if (small) {
            setSeeTasks(false)
        }

        if (updatedList != null) {
            const newList = updatedList.map((task) => {
                if (task.id == id) {
                    task.selected = true;
                } else {
                    task.selected = false;
                }
                return task;
            });
            setUserList(newList);
            showInEditDisplay(newList.at(-1));
        } else {
            const newList = userList.map((task) => {
                if (task.id == id) {
                    task.selected = true;
                    showInEditDisplay(task);
                } else {
                    task.selected = false;
                }
                return task;
            });
            setUserList(newList);
        }
    };
    const completeTask = (id) => {
        const newList = userList.map((task) => {
            if (task.id == id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setUserList(newList);
    };
    const deleteTask = (id) => {
        setIsEditing(false);

        const newList = userList.filter((task) => task.id !== id);
        setUserList(newList);

        if (newList.length == 0) {
            setDisplay(true);
        } else {
            showThisTask(newList.at(-1).id, newList);
        }
    };
    const activateEdition = () => {
        setIsEditing(!isEditing);
    };
    const updateTask = (task) => {
        const newList = userList.map((taskItem) => {
            if (taskItem.id == task.id) {
                taskItem.title = task.title;
                taskItem.description = task.description;

                setEditDisplayContent({
                    title: taskItem.title,
                    description: taskItem.description,
                    id: taskItem.id,
                });
            }
            return taskItem;
        });
        setUserList(newList);
    };
    const createNewTask = (newItem) => {
        const newList = [...userList, newItem];
        showThisTask(newItem.id, newList);
    };
    const showInEditDisplay = (task) => {
        setDisplay(false);
        setEditDisplayContent(task);
    };
    const welcomeButton = () => {
        setDisplay(true);
    };
    const editCreateButton = () => {
        setDisplay(true);
    };

    const [seeTasks, setSeeTasks] = useState(false);
    const seeTasksButton = () => {
        console.log("viendo la lista");
        setSeeTasks(true);
    };

    return (
        <div className="App">
            <div className={`list-side ${seeTasks ? "show" : null}`}>
                <Status userList={userList} />
                <List
                    userList={userList}
                    showThisTask={!isEditing ? showThisTask : () => {}}
                />
            </div>
            <div className={`display-side ${seeTasks ? "hidden" : null}`}>
                <Display
                    display={display}
                    createNewTask={createNewTask}
                    editDisplayContent={editDisplayContent}
                    isEditing={isEditing}
                    welcomeButton={welcomeButton}
                    editCreateButton={editCreateButton}
                    deleteTask={deleteTask}
                    activateEdition={activateEdition}
                    completeTask={completeTask}
                    updateTask={updateTask}
                    seeTasksButton={seeTasksButton}
                />
            </div>

        </div>
    );
}

export default App;
