const Button = ({text = 'Button'}) => {
    return (
        <button className="mt-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-lg text-white border-white transition-all duration-200 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-100 hover:scale-x-103 active:from-blue-400 active:to-blue-600 active:shadow-none active:scale-x-100">
            {text}
        </button>
    )
}

export default Button
