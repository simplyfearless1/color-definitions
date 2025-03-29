import ItemAddModal from '@/components/item-add-modal'
import { useState } from 'react'
import Button from '@/components/button'

const PageHeader = () => {
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
                <Button classes='bg-orange-500 text-white hover:bg-orange-600 justify-center items-center' handleClick={handleClick}>
                    <span className="text-4xl material-symbols-outlined pr-1">
                        add_circle
                    </span>
                    Add Color definition
                </Button>
            </div>
            <ItemAddModal visible={isModalOpen} onClose={handleClose} onSubmit={handleClose} />
        </>
    )
}
export default PageHeader