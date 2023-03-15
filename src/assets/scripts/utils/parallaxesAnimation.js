import {getRectangle, isVisible} from "./dom.js"
const scrollValueX = []
const scrollValueY = []
const scrollValueR = []

const parallaxAnimation = (scroll) => {
    const images = document.querySelectorAll(".emi-img-render")
    const els = [...images]
    if(scrollValueX.length === 0){

        els.forEach(()=>{
            scrollValueX.push(0)
            scrollValueY.push(0)
            scrollValueR.push(0)
        })
    }
    els.forEach((image, index)=>{

        if(image && image.dataset.parallax){
       
            if(image.dataset.fullyVisible){
                const object = image.getBoundingClientRect()

                if(object.left <= 0 && object.right >= window.innerWidth){
                    scrollValueY[index] += image.dataset.parallaxSpeedY * scroll / 3
                    scrollValueX[index] += image.dataset.parallaxSpeed * scroll / 3
                    image.style.transform = `${image.dataset.rotate != 0 ? `rotateY(${image.dataset.rotate}deg)` : ""} translate(${scrollValueX[index]}px, ${scrollValueY[index]}px) scale(${image.dataset.scale})`
                }

            }else{

                if(isVisible(image)){
    
                    scrollValueY[index] += image.dataset.parallaxSpeedY * scroll / 3
                    scrollValueX[index] += image.dataset.parallaxSpeed * scroll / 3
                    scrollValueR[index] += image.dataset.rotate * scroll / 3
                    image.style.transform = `${image.dataset.isRotateAnimated=="true" ? `rotateZ(${scrollValueR[index]}deg)`: ""} ${image.dataset.rotate != 0 || image.dataset.rotateZ != 0 ? `rotateZ(${image.dataset.rotateZ}deg) rotateY(${image.dataset.rotate}deg)` : ""} translate(${scrollValueX[index]}px, ${scrollValueY[index]}px) scale(${image.dataset.scale})`
                    
                }

            }
        }
    })  
}
export default parallaxAnimation