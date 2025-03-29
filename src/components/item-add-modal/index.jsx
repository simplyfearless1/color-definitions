import { useState } from 'react'
import Input from '@/components/input'
import { request } from "@/api"
import { API_ENDPOINTS } from '@/config/api'
import Modal from '@/components/modal'

const ItemAddModal = ({ visible, onClose, onSubmit }) => {
    const formDataDefaultValue = {
        color_name: '',
        color_hex: ''
    }
    const [formData, setFormData] = useState(formDataDefaultValue)

    const handleDataSucess = async (res) => {
        const req = await res
        if (req.status === 200) {
            console.log(res.data)
        }
    }

    const handleInputChange = (e) => {
        const name = e.target.name
        const val = e.target.value
        let temp = { ...formData }
        temp[name] = val
        setFormData({ ...temp })
    }

    const handleFormSubmit = async () => {
        try {
            request
                (
                    API_ENDPOINTS.COLORS,
                    {
                        title: formData.color_name,
                        hex: formData.color_hex
                    },
                    'post',
                    handleDataSucess
                )
        } catch (err) {
            console.log(err)
        }
        setFormData(formDataDefaultValue)
    }

    return (
        <>
            {visible && (
                <Modal>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="w-full">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-base font-semibold text-gray-900" id="modal-title">Add Color Definition</h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">Create a new color definition</p>
                                </div>
                                <div className="w-full mt-3">
                                    <Input id='color_name' label='Color name' name='color_name' placeholder='White' handleChange={handleInputChange} value={formData.color_name} />
                                </div>
                                <div className="w-full mt-3">
                                    <Input id='color_hex' label='Color hex' name='color_hex' placeholder='#ffffff' handleChange={handleInputChange} value={formData.color_hex} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-orange-500 sm:ml-3 sm:w-auto" onClick={() => {
                            handleFormSubmit()
                            onSubmit()
                        }}>
                            Publish
                        </button>
                        <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={onClose}>Cancel</button>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default ItemAddModal