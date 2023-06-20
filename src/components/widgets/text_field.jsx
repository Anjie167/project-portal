import React, { useState } from "react";

function TextField(props) {
    const textField = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: props.align ?? "space-between",
        marginTop: "10px",

        width: props.width ?? "700px",
        marginBottom: "10px", // Fixed typo here
    };

    const labelStyle = {
        marginRight: props.space ?? "50px",
        color: "gray",
        textAlign: "left",
    };

    const fieldInput = {
        border: "1px solid grey",
        backgroundColor: "white",
        padding: "8px",
        width: props.inputLength ?? "72%",
        height: "50px",
        boxSizing: "border-box",
        borderRadius: "4px",
    };


    const [value, setValue] = useState(props.value);

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);

        if (props.onChange) {
            props.onChange(newValue);
        }
    };

    return (
        <div style={textField}>
            {props.label && (
                <label
                    style={{
                        ...labelStyle,
                        fontSize: props.fontSize,
                    }}
                >
                    {props.label}
                </label>
            )}
            <input
                type="text"
                placeholder={props.hintText}
                style={fieldInput}
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
}



TextField.defaultProps = {
    value: "",
    hintText: "Enter your email",
    fontSize: "14px",
    onchange: (value) => { },
};


export default TextField