import React from 'react';

declare const window: any;

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState(() => {
    if (!window) {
      return {
        width: 400,
        height: 400,
      };
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  });

  React.useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};
