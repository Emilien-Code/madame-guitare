import * as React from 'react';

const getSize = () => {
    return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth
      };
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = React.useState(getSize());

    const handleResize = () => {
        setWindowSize(getSize());
    }

    React.useEffect(()=>{
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, [])

}

export default useWindowSize;