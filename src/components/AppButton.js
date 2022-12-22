import { React, useState } from 'react';
import { AiFillEdit, AiOutlineUndo } from 'react-icons/ai';
import { MdSaveAlt } from 'react-icons/md';
import { BsCheck2Circle } from 'react-icons/bs';
import { IoCreateSharp } from 'react-icons/io5';
import { GiBroom } from 'react-icons/gi';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import '../css/AppButton.css';

export default function AppButton({ action, text, classes, icon }) {
    const [color, setColor] = useState('#f05454');
    const changeColor = () => {
        setColor('#222831');
    };
    const resetColor = () => {
        setColor('#f05454');
    };

    const icons = {
        create: <IoCreateSharp className="icon" />,
        del: <RiDeleteBin7Fill className="delete-icon icon" color={color} />,
        check: <BsCheck2Circle className="check-icon icon" />,
        edit: <AiFillEdit className="icon" />,
        clear: <GiBroom className="icon" />,
        save: <MdSaveAlt className="icon" />,
        undo: <AiOutlineUndo className="icon" />,
    };

    return (
        <button
            onClick={action}
            className={`general-button ${classes}`}
            onMouseOver={changeColor}
            onMouseLeave={resetColor}
        >
            {icons[icon]}
            {text}
        </button>
    );
}
