import React, { useState } from "react"

export default function Checkbox(props) {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <label
            style={{
                // alignItems: "center",
                display: "flex",
                alignItems: "center",
                fontSize: props.fontSize,
                fontWeight: props.fontWeight,
                ...props.style
            }}
        >
            <input
                type="checkbox"
                style={{
                    width: props.width,
                    height: props.width,
                    transform: "scale(1.2)",
                    margin: "0 8px 0 0",
                    marginRight: props.space
                }}
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            {props.text}
        </label>
    )
}

Checkbox.defaultProps = {
    fontSize: "14px",
    fontWeight: "Bold",
    text: "Angemeldet bleiden?",
    space: "20px",
}

