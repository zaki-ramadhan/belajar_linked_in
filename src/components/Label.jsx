const Label = ({ text = "Label" }) => {
    return (
        <span className="px-4 py-2 rounded-full bg-gradient-to-r bg-blue-100/80 border border-blue-300 text-primary font-medium md:text-2xl">
            {text}
        </span>
    )
}

export default Label
