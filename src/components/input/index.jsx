const Input = (
    {   
        placeholder, 
        name, 
        id, 
        value, 
        label, 
        handleChange 
    }
) => {
    return (
        <>
            <label htmlFor={name} className="block text-sm/6 font-medium text-gray-900">{label}</label>
            <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600">
                    <input type="text" name={name} id={id} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder={placeholder} value={value} onChange={handleChange} />
                </div>
            </div>
        </>
    )
}
export default Input