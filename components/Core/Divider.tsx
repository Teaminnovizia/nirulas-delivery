const Divider = ({ className }: { className?: string }) => {
    return (
        <div className={`w-full h-[1px] bg-divider-grey max-w-6xl mx-auto ${className}`} />
    )
}

export default Divider;