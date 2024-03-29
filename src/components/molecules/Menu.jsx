import React from "react";
import "../../assets/styles/components/molecules/menu.scss"
import MenuIcon from "../atoms/MenuIcon";

const Menu = () => {
    const [ isMenuOpen, setIsMenuOpen ] = React.useState(false);

    React.useEffect(()=>{
        if(isMenuOpen){
            // window.lenis.stop()

            const links = document.querySelectorAll("a.link")
            
            links.forEach((link, index) => {

                setTimeout(()=>{

                    link.style.opacity = 1
                    link.style.transform = "translateX(0)"

                }, 300 + index*100)

            })
        }


        setTimeout(()=>{
            
            window.lenis.on("scroll", (e) => {
                if(e.progress >= 0.99 && e.direction == 1){
                    if(window.innerWidth > 767 || window.location.pathname === "/")
                    setIsMenuOpen(true)
                }
            })
            
        },500)
    }, [isMenuOpen])
    return (
        <div className={`menu ${ isMenuOpen ? "open" : "" }`}>
            <MenuIcon isMenuOpen={ isMenuOpen } setIsMenuOpen={ setIsMenuOpen }/>
            {
                isMenuOpen && (
                    <>
                        <a className={`link ${ isMenuOpen ? "open" : "" }`} href="/">Accueil</a>
                        <a className={`link ${ isMenuOpen ? "open" : "" }`} href="/qui-suis-je">Qui suis-je ?</a>
                        <a className={`link ${ isMenuOpen ? "open" : "" }`} href="/ce-que-je-propose">Ce que je propose</a>
                        <a className={`link ${ isMenuOpen ? "open" : "" }`} href="/gallerie">Galerie</a>
                        <a className={`link ${ isMenuOpen ? "open" : "" }`} href="/me-contacter">Me contacter</a>

                    </>
                )
            }
        </div>

    )

}
export default Menu