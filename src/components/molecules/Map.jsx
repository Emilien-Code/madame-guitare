import React from "react"
import map from "../../assets/images/map/map.png"
import "../../assets/styles/components/molecules/map.scss"
const coord = [{
    x: 2,
    y: 8,
}, {
    x: 3,
    y: 8,
},
{
    x: 4,
    y: 9,
}, {
    x: 5,
    y: 10,
},
{
    x: 6,
    y: 10,
}, {
    x: 7.5,
    y: 9,
},
{
    x: 8,
    y: 9,
}, {
    x: 9,
    y: 9,
},
{
    x: 10,
    y: 9,
}, {
    x: 10,
    y: 10,
},
{
    x: 9.5,
    y: 11,
}, {
    x: 9.5,
    y: 12,
},
{
    x: 10,
    y: 13,
}, {
    x: 11,
    y: 13,
},
{
    x: 12,
    y: 13.5,
}, {
    x: 13,
    y: 13.75,
},
{
    x: 14,
    y: 13.75,
}, {
    x: 15,
    y: 13.75,
},
{
    x: 16,
    y: 13.75,
}, {
    x: 17,
    y: 13.75,
},
{
    x: 18,
    y: 14,
}]
const Map = () => {
    React.useEffect(() => {
        setTimeout(() => {
            window.lenis.on("scroll", (e) => {
                const pos = Math.trunc((coord.length - 1) * e.progress)
                const progress = Math.sqrt(((coord.length - 1) * e.progress - pos) * ((coord.length - 1) * e.progress - pos))
                const { x, y } = coord[pos]
                document.querySelector(".indicator").style.transform = `translate(calc(${(x + ((coord[pos + 1].x - x)) * progress) * 10}px - 50%), calc(${(y + ((coord[pos + 1].y - y)) * progress) * 10}px - 50%))`
            })
        }, 500)
    }, [])
    return (<div className="map">
        <div className="indicator">
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.3011 3.77892C6.7543 4.05556 8.21777 3.3508 8.90754 2.04215C9.79475 0.358923 12.2052 0.358923 13.0925 2.04215C13.7822 3.3508 15.2457 4.05556 16.6989 3.77892C18.5681 3.4231 20.071 5.3077 19.3082 7.05083C18.7151 8.40604 19.0765 9.98963 20.1989 10.9533C21.6425 12.1928 21.1061 14.5429 19.2676 15.0333C17.8383 15.4146 16.8256 16.6845 16.7719 18.1629C16.7029 20.0643 14.5311 21.1102 13.0014 19.9786C11.8122 19.0989 10.1878 19.0989 8.99858 19.9786C7.4689 21.1102 5.29712 20.0643 5.22809 18.1629C5.17443 16.6845 4.16168 15.4146 2.73236 15.0333C0.893911 14.5429 0.357525 12.1928 1.80113 10.9533C2.92347 9.98963 3.28492 8.40604 2.69184 7.05083C1.92901 5.3077 3.43193 3.4231 5.3011 3.77892Z" fill="url(#paint0_diamond_46_762)" stroke="#8553A4" />
                <defs>
                    <radialGradient id="paint0_diamond_46_762" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 11) rotate(90) scale(17.1957)">
                        <stop stop-color="#D96545" />
                        <stop offset="1" stop-color="#6A4CD7" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <img src={map} alt="mini map" />
    </div>
    )
}

export default Map