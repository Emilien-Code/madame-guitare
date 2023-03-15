export const getRectangle = (element) => {
    const object = element.getBoundingClientRect();
    object.relativeRight = window.innerWidth - object.right;
    object.relativeBottom = window.innerHeight - object.bottom;

    return object;
}

export const isVisible = (element) => {
    const object = element.getBoundingClientRect();
    return object.top < window.innerHeight && object.bottom > 0 && object.left < window.innerWidth && object.right > 0;
}

export async function isTypoReady() {
    let ready = await getDocument().fonts.ready;
    // console.log(ready);
}

export const scrollTrigger = (props, customFunction) => {
    let { triggerElement, timeline, end, pin, pinEnd } = props;
    // console.log(props)
    // In this function we would like to create the behavior of the ScrollTrigger
    // First we init the behavior 
    let pinElement = false;
    let initialHeight = false;
    triggerElement = getDocument().querySelector(triggerElement);
    initialHeight = getRectangle(triggerElement).height;
    triggerElement.style.height = initialHeight + end + 'px';
    triggerElement.style.position = 'relative'

    let rectElement = () => getRectangle(triggerElement);
    pinElement = pin ? triggerElement.querySelector('.pin') : false;


    getDocument().addEventListener('scroll', () => {
        // console.log(-(rectElement().top));
        if (pinElement && ((-(rectElement().top) >= 0))) {
            if (!pinEnd) {
                if (-(rectElement().top) <= rectElement().height - getRectangle(pinElement).height) {
                    // pinElement.style.transform = `translateY(${- rectElement().top}px)`;
                    pinElement.style.position = 'fixed';
                    pinElement.style.transform = ``;
                    pinElement.style.top = '0px';
                    pinElement.style.left = '0px';
                } else {
                    pinElement.style.transform = `translateY(${rectElement().height - getRectangle(pinElement).height}px)`;
                    pinElement.style.position = ``;
                }
            }
            if (pinEnd) {
                pinElement.style.position = 'fixed';
                pinElement.style.transform = ``;
                pinElement.style.top = '0px';
                pinElement.style.left = '0px';
            }

        } else {
            pinElement.style.transform = ``;
            pinElement.style.position = ``;
        }

        if (customFunction) {
            customFunction({ fullProgress: (-(rectElement().top) / rectElement().height), progress: (-(rectElement().top) / (rectElement().height - window.innerHeight)) });
        }
    })
}

export const getDocument = () => {
    let currentDOM;
    let location = window.location.host;
    console.log("LOCATION", location)
    switch (location) {
        case 'localhost:3333':
            currentDOM = document.querySelector('iframe[data-preview="true"]').contentWindow.document;
            break;

        default:
            currentDOM = document;
            break;
    }

    return currentDOM;
}