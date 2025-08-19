import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, CircleX, Menu } from "lucide-react"

import logoBelajarLinkedIn from '@image/logo belajarLinkedIn - 2.jpg'

const NavbarLink = ({ text = "Link", href = "#" }) => {
    return (
        <li className="group/item hover:font-semibold group-hover/ul:opacity-50 hover:opacity-100 active:font-semibold duration-200">
            <a href={href} className="inline-flex items-center">
                {text}
                <ArrowUpRight className="ml-2 hidden group-hover/item:inline" />
            </a>
        </li>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const mobileHeaderRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (mobileHeaderRef.current && !mobileHeaderRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 bg-white">
            {/* mobile navigation */}
            <div className="logo-menuBtn-wrapper px-4 py-5 border-b border-gray-300 flex items-center justify-between">
                <img src={logoBelajarLinkedIn} alt="logo belajarLinkedIn" className="w-22" />
                <Menu onClick={() => setIsOpen(true)} className="size-8 text-gray-400 hover:text-primary"/>
            </div>

            {/* open navigation */}
            {isOpen && (
                <header ref={mobileHeaderRef} className="fixed top-0 left-0 right-0 pt-22 pb-16 shadow-2xl z-50 bg-white border-b border-gray-300">
                    <div className="bottom-line-decoration absolute bottom-0 left-0 right-0 px-6 py-2 text-sm bg-gradient-to-l from-blue-400 to-blue-700 text-white border-b-2">
                        Mastering LinkedIn for Career Growth
                    </div>

                    {/* logo */}
                    <img src={logoBelajarLinkedIn} alt="logo belajarLinkedIn" className="w-22 fixed top-5 left-4" />

                    {/* tombol close */}
                    <CircleX onClick={() => setIsOpen(false)} className="size-7 fixed top-5 right-4 text-gray-400 hover:text-gray-600 active:text-gray-600" />

                    <nav className="px-5">
                        <ul className="group/ul flex flex-col justify-between gap-6 text-lg">
                            <NavbarLink text="Home" />
                            <NavbarLink text="About" href="#about" />
                            <NavbarLink text="Benefits" href="#benefits" />
                            <NavbarLink text="Testimonials" href="#testimonials" />
                        </ul>
                    </nav>
                    <span className="cta-btn"></span>
                </header>)
            }
        </div>
    )
}

export default Navbar
