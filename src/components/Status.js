import { React } from 'react';
import StatusItem from './Status/StatusItem';
import '../css/Status.css';

export default function Status({ userList }) {
    const status = {
        total: userList.length,
        completed: userList.filter((task) => {
            if (task.completed) {
                return task;
            }
        }).length,
    };

    return (
        <div className="Status app-container">
            <div className="status-header">Task Status</div>
            <div className="status-content">
                {userList.length === 0 ? (
                    <div className="empty">No task</div>
                ) : (
                    <>
                        <StatusItem value={status.total} text="Total" />
                        <StatusItem value={status.completed} text="Completed" />
                        <StatusItem
                            value={status.total - status.completed}
                            text="Pending"
                        />
                    </>
                )}
            </div>
        </div>
    );
}
