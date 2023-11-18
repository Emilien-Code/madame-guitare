import React from "react";
import "../../assets/styles/components/molecules/menuIcon.scss"
const Menu = (data) => {
    const { isMenuOpen, setIsMenuOpen } = data;
    const c = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <button className="menuIcon" onClick={c}>
            { isMenuOpen ? 

                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.1855 12.1902C12.454 11.9218 12.8753 11.8992 13.1693 12.1229L13.2462 12.19L18.3737 17.3158L23.5024 12.1871C23.7953 11.8942 24.2702 11.8942 24.563 12.1871C24.8315 12.4556 24.8539 12.877 24.6302 13.1709L24.563 13.2477L19.4343 18.3764L24.5616 23.5009C24.8546 23.7937 24.8548 24.2687 24.5619 24.5616C24.2934 24.8301 23.8721 24.8526 23.578 24.6289L23.5012 24.5618L18.3737 19.4371L13.2478 24.5629C12.9549 24.8558 12.4801 24.8558 12.1872 24.5629C11.9187 24.2944 11.8963 23.873 12.12 23.579L12.1872 23.5023L17.313 18.3764L12.1857 13.2509C11.8928 12.9581 11.8926 12.4831 12.1855 12.1902Z" fill="white"/>
                <circle cx="18.5" cy="18.5" r="17.5" stroke="white" stroke-miterlimit="12.7455"/>
                </svg>
    
            : 

                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18.5" cy="18.5" r="17.5" stroke="white" stroke-miterlimit="12.7455"/>
                    <path d="M9.71329 22.8618H27.2875C27.6811 22.8618 28 23.1166 28 23.4309C28 23.719 27.732 23.9571 27.3842 23.9948L27.2875 24H9.71329C9.3198 24 9.00082 23.7452 9.00082 23.4309C9.00082 23.1428 9.26885 22.9047 9.61661 22.867L9.71329 22.8618ZM9.71329 17.932H27.2875C27.6811 17.932 28 18.1868 28 18.5011C28 18.7892 27.732 19.0273 27.3842 19.065L27.2875 19.0701H9.71329C9.3198 19.0701 9.00082 18.8153 9.00082 18.5011C9.00082 18.2129 9.26885 17.9748 9.61661 17.9371L9.71329 17.932ZM9.71247 13H27.2868C27.6802 13 27.9992 13.2548 27.9992 13.5691C27.9992 13.8572 27.7312 14.0953 27.3835 14.133L27.2868 14.1382H9.71247C9.31898 14.1382 9 13.8834 9 13.5691C9 13.281 9.26803 13.0429 9.61579 13.0052L9.71247 13Z" fill="white"/>
                </svg>
                
            }
        </button>
        
    )

}
export default Menu