import React, { useState } from 'react';
import { GridViewBuilder, Container, Column } from 'flutter_components';
import { Link } from "react-router-dom";
import { application } from '../../utils/routes';


const GridWithContainer = () => {
    const data = [
        { title: 'Start Your 2025 Application', detail: '' },
        { title: 'DV-2025', detail: 'Detail...' },
        { title: 'DV-2024', detail: 'Detail..' },
        { title: 'DV-2023', detail: 'Detail..' },
    ];

    const gridDelegate = {
        crossAxisCount: 3,
        mainAxisSpacing: 20,
        crossAxisSpacing: 20,
        childAspectRatio: 1.5,
    };

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const itemBuilder = (itemIndex) => {
        const item = data[itemIndex];
        const isHovered = itemIndex === hoveredIndex;

        return (
            <div onMouseEnter={() => handleMouseEnter(itemIndex)}
                onMouseLeave={handleMouseLeave}>
                <Link to={application} style={{ textDecoration: "none", color: "black" }}>
                    <Container
                        borderRadius="20px"
                        color="#e5e5e5"
                        height="200px"
                        width="300px"
                        padding="20px"
                        style={{
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                            transition: 'transform 0.3s',
                            boxShadow: isHovered ? '0 0 5px rgba(0, 0, 0, 0.3)' : 'none',
                        }}
                    >
                        <Column mainAxisAlignment="start" crossAxisAlignment="start">
                            <h3>{item.title}</h3>
                            <p>{item.detail}</p>
                        </Column>
                    </Container>
                </Link>
            </div>
        );
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '80%', paddingLeft: "20px" }}>
            <GridViewBuilder
                itemCount={data.length}
                gridDelegate={gridDelegate}
                itemBuilder={itemBuilder}
            />
        </div>
    );
};

export default GridWithContainer;
