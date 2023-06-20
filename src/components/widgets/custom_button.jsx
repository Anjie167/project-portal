import React, { useState } from "react";
import { kPrimary } from "../../utils/colors";

const CustomButton = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const buttonStyle = {
        backgroundColor: kPrimary,
        color: "#FFFFFF",
        padding: "10px 20px",
        border: "none",
        fontSize: "20px",
        width: props.width ?? "100%",
        height: "50px",
        marginTop: "50px",
        borderRadius: "7px",
        cursor: "pointer",
        transform: isHovered ? "scale(1.01)" : "scale(1)",
        transition: "transform 0.5s ease-in-out",
    };

    return (
        <button
            style={buttonStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            onClick={props.onClick}
        >
            {props.label ?? "Login"}
        </button>
    );
};

export default CustomButton;
