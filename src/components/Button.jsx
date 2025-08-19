const Button = ({text = 'Button', className}) => {
    return (
        <button className={`px-5 py-2.5 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 text-lg text-white border-white ${ className } transition-all duration-200 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg active:from-blue-400 active:to-blue-600 active:shadow-none active:scale-x-100`}>
            {text}
        </button>
    )
}

export default Button
