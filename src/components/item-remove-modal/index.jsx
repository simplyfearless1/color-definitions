import { request } from '@/api'
import { API_ENDPOINTS } from '@/config/api'
import Modal from '@/components/modal'

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
                        <button type="button" className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 sm:ml-3 sm:w-auto" onClick={() => {
                            handleSubmit()
                            onSubmit()
                        }}>Remove color</button>
                        <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={onClose}>Cancel</button>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default ItemRemoveModal