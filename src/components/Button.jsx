const Button = ({ text = 'Button', className }) => {
    return (
        <button className={`px-7 md:px-8 py-2.5 md:py-5 lg:py-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-xl md:text-3xl lg:text-3xl xl:text-xl text-white border-white cursor-pointer ${className} transition-all duration-200 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg active:from-blue-500 active:to-blue-700 active:shadow-none active:scale-x-95`}>
            <a href="https://www.instagram.com/belajarlinkedin/" target="_blank">
                {text}
            </a>
        </button>
    )
}

export default Button
