import { request } from '@/api'
import { API_ENDPOINTS } from '@/config/api'
import Modal from '@/components/modal'
import Button from '@/components/button'

const ItemRemoveModal = ({ visible, onClose, onSubmit, id }) => {
    const handleDataSuccess = async (res) => {
        const req = await res
        if (req.status === 200) {
            console.log(res.data)
            setFormData({
                color_name: res.data.title,
                color_hex: res.data.hex
            })
        }
    }
    const handleSubmit = async () => {
        try {
            request
                (
                    API_ENDPOINTS.COLORS + `/${id}`,
                    '',
                    'delete',
                    handleDataSuccess
                )
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {visible && (
                <Modal>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="w-full">
                            <div className="text-center">
                                <h3 className="text-base font-semibold text-gray-900" id="modal-title">Are you sure you want to remove Color #{id}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse justify-center">
                        <Button classes='bg-orange-500 text-white hover:bg-orange-600' handleClick={() => {
                            handleSubmit()
                            onSubmit()
                        }}>Remove color</Button>
                        <Button classes='ring-1 ring-gray-300 bg-white text-gray-900 ring-inset hover:bg-gray-50' handleClick={onClose}>Cancel</Button>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default ItemRemoveModal