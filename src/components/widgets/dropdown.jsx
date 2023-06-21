import React, { useState } from "react"

export default function DropDown(props) {
    const [selectedValue, setSelectedValue] = useState(props.value)

    const handleValueChange = (event) => {
        const newValue = event.target.value
        setSelectedValue(newValue)
        props.onChange(newValue)
    }

    const dropdown = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: props.align ?? "space-between",
        width: props.width ?? "700px",
        marginBottom: "10px",
        marginTop: "10px",
        marginRight: "10px"
    }

    const labelStyle = {
        marginRight: props.space ?? "50px",
        color: "gray",
        textAlign: "left",
    }

    const dropSelect = {
        border: "1px solid grey",
        backgroundColor: "white",
        padding: "8px",
        width: "72%",
        height: "50px",
        boxSizing: "border-box",
        borderRadius: "4px",
    }


    return (
        <div style={dropdown}>
            {props.label && (
                <label
                    style={{
                        ...labelStyle,
                        width: props.width,
                        fontSize: props.fontSize,
                    }}
                >
                    {props.label}
                </label>
            )}
            <select
                value={selectedValue}
                onChange={handleValueChange}
                style={{ ...dropSelect }}
            >
                {props.options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        style={{ color: "black" }}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}



