import { useEffect, useState } from "react"


const Header = () => {
    const [ isOpen, setISOpen ]= useState(false);

    const toggleMenu = () => setISOpen(true);

    useEffect(() => {
        const header = document.getElementById('myHeader');
        const page  = document.getElementById('page');
        const openMenuButton = document.getElementById('openmenu');

        window.addEventListener('scroll', function () {
            page?.classList.remove('menuopen');
            if (window.scrollY >= 100) {
                header?.classList.add('sticky');
            } else {
                header?.classList.remove('sticky');
            }
        });


        openMenuButton?.addEventListener('click', function () {
            header?.classList.remove('sticky');
            page?.classList.add('menuopen');
        });

        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(function (link) {
            link.addEventListener('click', function (event) {
                
                event.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = targetId ? document.querySelector( targetId ) : null;

                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

    }, [])
    return (
        <>
            <header id="myHeader" className="">
                <nav className={`uppercase ${ isOpen ? 'open': ''}` }>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <button id="openmenu" onClick={ toggleMenu }>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </header>
        </>
    )
    }

export default Header