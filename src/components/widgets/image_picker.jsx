import React, { useState } from "react";

const styles = {
    container: {
        border: "1px solid #ccc",
        padding: "20px",
        width: "300px",
        height: "300px",
        borderRadius: "8px",
        marginTop: "2%",
        marginBottom: "20px"
    },
    imageContainer: {
        marginBottom: "20px",
        textAlign: "center",
    },
    image: {
        maxWidth: "200px",
    },
    buttonContainer: {
        textAlign: "center",
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "lightblue",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default function ImagePicker() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };

    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                {selectedImage ? (
                    <img src={selectedImage} alt="Selected" style={styles.image} />
                ) : (
                    <p>No image selected</p>
                )}
            </div>
            <div style={styles.buttonContainer}>
                <label htmlFor="image-upload">
                    <button style={styles.button}>Pick Image</button>
                </label>
                <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                />
            </div>
        </div>
    );
}
