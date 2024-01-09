import React from "react";
import useSmoothScroll from "../../assets/scripts/hooks/useSmoothScroll";
import parallaxAnimation from "../../assets/scripts/utils/parallaxesAnimation";
const SmoothScroll = (props)=>{
    const {isHorizontal} = props
    const scroll = useSmoothScroll(isHorizontal ? "horizontal" : "vertical");
    React.useEffect(() => {
      scroll ? scroll.start() : ""

 
        window.lenis.on('scroll', (scroll) => {
            parallaxAnimation(scroll.velocity)
        })
    }, [scroll]);
  
    return <></>
}

export default SmoothScroll