const $body = typeof document.querySelector('body') === 'object' ?  document.querySelector('body') : false;
let scrollPosition = 0;

export default {
    enable(customFunc){
        if($body){
            scrollPosition = window && window.pageYOffset;
            $body.style.overflow = 'hidden';
            $body.style.position = 'fixed';
            $body.style.top = `-${scrollPosition}px`;
            $body.style.width = '100%';
        }
    },
    disable(customFunc){
        if($body){
            $body.style.overflow = 'hidden hidden';
            $body.style.removeProperty('position');
            $body.style.removeProperty('top');
            $body.style.removeProperty('width');
            window && window.scrollTo(0, scrollPosition);
        }
    }
}