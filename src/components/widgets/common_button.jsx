import React from 'react';

const CommonButton = ({ label, color, onClick }) => {
    const buttonStyle = {
        border: `2px solid ${color}`,
        backgroundColor: 'transparent',
        color: color,
        width: "35%",
        marginTop: "10px",
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {label}
        </button>
    );
};

export default CommonButton;
