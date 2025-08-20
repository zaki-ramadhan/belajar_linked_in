const Label = ({ text = "Label" }) => {
    return (
        <span className="px-4 py-2 rounded-full bg-gradient-to-r bg-blue-100/80 border border-blue-300 text-blue-800 font-medium md:text-2xl lg:text-lg xl:text-base">
            {text}
        </span>
    )
}

export default Label
