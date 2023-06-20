import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const styles = {
    container: {
        marginBottom: "20px",
    },
    label: {
        marginRight: "100px",
        color: "grey"
    },
    datePicker: {
        width: "300px",
        height: "50px",
        // border: "1px solid #ccc",
        // borderRadius: "4px",
        padding: "8px",
        boxSizing: "border-box",
    },
};

export default function MyDatePicker() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div style={styles.container}>
            <label htmlFor="date-picker" style={styles.label}>
                Select a date:
            </label>
            <DatePicker
                id="date-picker"
                selected={selectedDate}
                onChange={handleDateChange}
                className="date-picker"
                style={styles.datePicker}
            />
        </div>
    );
}
