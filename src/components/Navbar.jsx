import { useState, useEffect, useRef } from 'react';
import { CircleX, Menu } from "lucide-react"

import logoBelajarLinkedIn from '@image/logo belajarLinkedIn - 2.jpg'
import NavLink from './NavLink';

// const NavLink = ({ onClick, text = "Link", href = "#" }) => {
//     return (
//         <li onClick={onClick} className="group/item hover:font-semibold group-hover/ul:opacity-50 hover:opacity-100 active:font-semibold duration-200">
//             <a href={href} className="inline-flex w-full items-center">
//                 {text}
//                 <ArrowUpRight className="ml-2 hidden group-hover/item:inline" />
//             </a>
//         </li>
//     )
// }

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
        <header className="fixed top-0 md:px-6 left-0 right-0 bg-white z-60">
            {/* mobile navigation */}
            <div className="logo-menuBtn-wrapper px-4 py-5 border-b border-gray-300 flex items-center justify-between">
                <img src={logoBelajarLinkedIn} alt="logo belajarLinkedIn" className="w-22 md:w-32" />
                <Menu onClick={() => setIsOpen(true)} className="size-8 md:size-12 text-gray-400 hover:text-primary lg:hidden" />

                {/* navlink for lg to xl */}
                <nav className='hidden lg:block'>
                    <ul className="group/ul flex justify-between gap-12 text-lg">
                        <NavLink text="Home" />
                        <NavLink text="About" href="#about" />
                        <NavLink text="Benefits" href="#benefits" />
                        <NavLink text="Testimonials" href="#testimonials" />
                        <NavLink text="Daftar" href="#cta" />
                    </ul>
                </nav>
            </div>

            {/* open navigation only in mobile */}
            {isOpen && (
                <div ref={mobileHeaderRef} className="fixed top-0 left-0 right-0 pt-22 md:pt-28 pb-16 md:pb-20 px-5 md:px-10 shadow-2xl z-50 bg-white border-b border-gray-300">
                    <div className="bottom-line-decoration absolute bottom-0 left-0 right-0 px-6 py-2 md:py-3 text-sm md:text-xl bg-gradient-to-l from-blue-400 to-blue-700 text-white border-b-2">
                        Mastering LinkedIn for Career Growth
                    </div>

                    {/* logo */}
                    <img src={logoBelajarLinkedIn} alt="logo belajarLinkedIn" className="w-22 md:w-32 fixed top-5 left-4 md:left-10" />

                    {/* tombol close */}
                    <CircleX onClick={() => setIsOpen(false)} className="size-7 md:size-10 fixed top-5 right-4 md:right-10 text-gray-400 hover:text-gray-600 active:text-gray-600" />

                    <nav>
                        <ul className="group/ul flex flex-col justify-between gap-6 md:gap-8 text-lg">
                            <NavLink onClick={() => setIsOpen(false)} text="Home" />
                            <NavLink onClick={() => setIsOpen(false)} text="About" href="#about" />
                            <NavLink onClick={() => setIsOpen(false)} text="Benefits" href="#benefits" />
                            <NavLink onClick={() => setIsOpen(false)} text="Testimonials" href="#testimonials" />
                            <NavLink onClick={() => setIsOpen(false)} text="Daftar" href="#cta" />
                        </ul>
                    </nav>
                </div>)
            }
        </header>
    )
}

export default Navbar
