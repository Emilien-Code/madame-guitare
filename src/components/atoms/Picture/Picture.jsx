import * as React from 'react';
import { BREAKPOINTS } from "../../../assets/scripts/utils/variables";
import { isLoadable } from '../../../assets/scripts/utils/dom';

// Import component style 
import './picture.scss';

const Picture = (props) => {
    const { images, alt, refClass, lazy, poster, width, height, parallax, speedY, initialX, initialY, scale, initialXMobile, initialYMobile, isRotateAnimated, rotate, rotateZ, speed, isFullyVisible} = props;
    const el = React.useRef();
    const [isLazyVisible, setIsLazyVisible] = React.useState();
    const p = poster
    
    let imgs = () => {
        if (images) {
            return images;
        }
    }

    // Init lazy functions 
    const setIntersect = () => {
        if (isLoadable(el.current)) {
            let sources = el.current.querySelectorAll('source');
            let img = el.current.querySelector('img');

            img.onload = () => {
                el.current.querySelector('.picture-blur').animate([
                    // keyframes
                    { 
                        opacity: 1,
                        filter: "blur(50px)"
                    },
                    { 
                        opacity: 0,
                        filter: "blur(0px)"
                     }
                  ], {
                    // timing options
                    duration: 10,
                    fill: "forwards",
                    iterations: 1,
                  });
                el.current.querySelector('.print').animate([
                    // keyframes
                    { 
                        opacity: 0,
                        filter: "blur(50px)"
                    },
                    { 
                        opacity: 1,
                        filter: "blur(0px)"
                     }
                  ], {
                    // timing options
                    duration: 250,
                    fill: "forwards",
                    iterations: 1,
                  });

            }
            // Change source url 
            sources.forEach(element => {
                element.srcSet = element.dataset.srcSet;
            });

            // Change img url 
            img.src = img.dataset.src;
            document.querySelector("main").removeEventListener("scroll", setIntersect);
        }
    }

    const customIntersect = () => {
        document.querySelector("main").addEventListener("scroll", setIntersect);
    }

    React.useEffect(() => {
        if (lazy) {
            customIntersect();
            setIntersect();
        }
    }, [])

    return (
        <div className={'emi-img-render ' + refClass}
                data-parallax={parallax}
		        data-initial-x={initialX}
		        data-initial-y={initialY}
		        data-initial-x-mobile={initialXMobile}
		        data-initial-y-mobile={initialYMobile}
                data-fully-visible={isFullyVisible}
		        data-parallax-speed={speed ? speed : 0}
		        data-parallax-speed-y={speedY ? speedY : 0}
                data-scale={scale ? scale : 1}
                data-rotate={rotate ? rotate : 0}
                data-rotate-z={ rotateZ ? rotateZ : 0 }
                data-is-rotate-animated={isRotateAnimated ? isRotateAnimated : false}
        >
            <picture {...props} ref={el} >
                <source
                    type="image/webp"
                    media={`(max-width: ${BREAKPOINTS.tablet - 1}px)`}
                    data-src-set={imgs()[3]}
                    srcSet={lazy ? null : imgs()[3]}
                />
                <source
                    type="image/webp"
                    media={`(min-width: ${BREAKPOINTS.tablet}px)`}
                    data-src-set={imgs()[2]}
                    srcSet={lazy ? null : imgs()[2]}
                />

                <source
                    type="image/jpeg"
                    media={`(max-width: ${BREAKPOINTS.desktop - 1}px)`}
                    data-src-set={imgs()[1]}
                    srcSet={lazy ? null : imgs()[1]}
                />
                <source
                    type="image/jpeg"
                    media={`(min-width: ${BREAKPOINTS.desktop}px)`}
                    data-src-set={imgs()[0]}
                    srcSet={lazy ? null : imgs()[0]}
                />
                <img
                    className={lazy ? 'print' : ""}
                    src={lazy ? p : imgs()[0]}
                    data-src={imgs()[0]}
                    alt={alt}
                    width={width}
                    height={height}
                />
                {
                    lazy && !isLazyVisible && (<div className='picture-blur'>
                        <img src={p}
                            alt={alt}
                            width={width}
                            height={height} />
                    </div>)
                }
                {
                    lazy && (
                        <noscript>
                            <source
                                type="image/webp"
                                media={`(max-width: ${BREAKPOINTS.tablet - 1}px)`}
                                srcSet={imgs[3]}
                            />
                            <source
                                type="image/webp"
                                media={`(min-width: ${BREAKPOINTS.tablet}px)`}
                                srcSet={imgs[2]}
                            />

                            <source
                                type="image/jpeg"
                                media={`(max-width: ${BREAKPOINTS.desktop - 1}px)`}
                                srcSet={imgs[1]}
                            />
                            <source
                                type="image/jpeg"
                                media={`(min-width: ${BREAKPOINTS.desktop}px)`}
                                srcSet={imgs[0]}
                            />
                            <img
                                src={imgs[0]}
                                alt={alt}
                                width={width}
                                height={height}
                            />
                        </noscript>
                    )
                }
            </picture>
        </div>
    )
}

export default Picture;