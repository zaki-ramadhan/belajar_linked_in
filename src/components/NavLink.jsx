import { ArrowUpRight } from "lucide-react"

const NavLink = ({ onClick, text = "Link", href = "#" }) => {
    return (
        <li onClick={onClick} className="group/item hover:font-semibold group-hover/ul:opacity-50 hover:opacity-100 active:font-semibold duration-200">
            <a href={href} className="inline-flex w-full items-center md:text-3xl lg:text-2xl xl:text-xl">
                {text}
                <ArrowUpRight className="ml-2 md:ml-6 lg:ml-2 md:scale-140 lg:scale-120 hidden group-hover/item:inline" />
            </a>
        </li>
    )
}

export default NavLink;