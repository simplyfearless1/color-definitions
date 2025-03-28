import ItemAddModal from "../../components/item-add-modal"
import { useState } from "react"

const PageTitle = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleClick = () => setIsModalOpen(true)
    const handleClose = () => setIsModalOpen(false)

    return (
        <>
            <div className="max-w-5xl text-center">
                <h1 className="text-4xl mt-8">
                    Color definitions
                </h1>
                <p className="mb-2">
                    Below is a list of color definitions. You may remove or add existing color definitions. These changes use then stored in the state and use a mock API call for demonstrative purposes.
                </p>
                <button type="button" className="inline-flex w-full justify-center items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-orange-500 sm:ml-3 sm:w-auto" onClick={handleClick}>
                    <span className="text-4xl material-symbols-outlined pr-1">
                        add_circle
                    </span>
                    Add Color definition
                </button>
            </div>
            <ItemAddModal visible={isModalOpen} onClose={handleClose} onSubmit={handleClose} />
        </>
    )
}
export default PageTitle