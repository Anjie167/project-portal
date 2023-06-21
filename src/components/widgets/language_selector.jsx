import React, { useState } from 'react';

const LanguageSelector = () => {
    const languageOptions = [
        { name: 'English', image: 'https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg' },
        { name: 'Germane', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png' },
        { name: 'French', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png' },
    ];
    const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[1]);
    const [showOptions, setShowOptions] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    const circleStyle = {
        width: '50px',
        height: '50px',
        margin: "10px",
        border: "1px solid grey",
        borderRadius: '50%',
        backgroundImage: `url(${selectedLanguage.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s ease-in-out',
        transform: 'scale(1)',
    };

    const circleHoverStyle = {
        transform: 'scale(1.1)',
    };

    const optionsStyle = {
        width: '100px',
        height: '120px',
        padding: "5px",
        borderRadius: "5px",
        listStyleType: 'none',
        position: "absolute",
        backgroundColor: "white"
    };

    const optionItemStyle = {
        cursor: 'pointer',
        padding: '10px',
    };

    return (
        <div>
            <div
                style={{ ...circleStyle, ...(isHovered && circleHoverStyle) }}
                onClick={() => setShowOptions(!showOptions)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            ></div>
            {showOptions && (
                <ul style={optionsStyle}>
                    {languageOptions.map((language) => (
                        <li
                            key={language.name}
                            onClick={() => {
                                handleLanguageSelect(language);
                                setShowOptions(!showOptions)
                            }}
                            style={optionItemStyle}
                        >
                            {language.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageSelector;
