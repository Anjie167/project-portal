import React from 'react';
import { useMediaQuery } from 'react-responsive';


// Create the context
const ScreenSizeContext = React.createContext();

// Create a provider component
export const ScreenSizeProvider = ({ children }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const isMediumScreen = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1025 });

  return (
    <ScreenSizeContext.Provider value={{ isSmallScreen, isMediumScreen, isLargeScreen }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

// Create a custom hook to access the context
export const useScreenSize = () => {
  const screenSize = React.useContext(ScreenSizeContext);
  if (!screenSize) {
    throw new Error('useScreenSize must be used within a ScreenSizeProvider');
  }
  console.log(screenSize);
  return screenSize;
};
