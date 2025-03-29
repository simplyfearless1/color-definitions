const Button = ({children, handleClick, bgColor, classes, ...other}) => {
    return (
        <button type="button" className={`${classes} inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-xs sm:ml-3 sm:w-auto`} onClick={handleClick} {...other}>
            {children}
        </button>        
    )
}
export default Button