import { useEffect, useState } from "react";

interface WindowSize {
  width: number
  height: number
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const changeSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    const a = window.addEventListener('resize', changeSize);

    return () => {
      window.removeEventListener('resize', changeSize);
    }
  }, []);

  return {...windowSize}
}
