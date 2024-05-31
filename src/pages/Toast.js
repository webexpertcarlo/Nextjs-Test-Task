"use client"

import React from 'react';

const Toast = ({ message, onClose }) => {
    return (
        <div className="fixed bottom-0 right-0 m-4 bg-red-500 text-white py-2 px-4 rounded-md">
            <p>{message}</p>
            <button onClick={onClose} className="ml-2 text-white font-bold">Close</button>
        </div>
    );
};

export default Toast;
