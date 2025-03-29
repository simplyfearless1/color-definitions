import { useEffect, useState } from 'react'
import Input from '@/components/input'
import { request } from '@/api'
import { API_ENDPOINTS } from '@/config/api'

const ItemEditModal = ({ visible, onClose, onSubmit, id }) => {
    const formDataDefaultValue = {
        color_name: '',
        color_hex: ''
    }
    const [formData, setFormData] = useState(formDataDefaultValue)

    const handleFormPreloadDataSuccess = async (res) => {
        const req = await res
        if (req.status === 200) {
            console.log(res.data)
            setFormData({
                color_name: res.data.title,
                color_hex: res.data.hex
            })
        }
    }

    const handleFormSubmitDataSuccess = async (res) => {
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
                    API_ENDPOINTS.COLORS + `/${id}`,
                    {
                        title: formData.color_name,
                        hex: formData.color_hex
                    },
                    'patch',
                    handleFormSubmitDataSuccess
                )
        } catch (err) {
            console.log(err)
        }
        setFormData(formDataDefaultValue)
    }

    useEffect(() => {
        if(visible) {
            try {
                request
                    (
                        API_ENDPOINTS.COLORS + `/${id}`,
                        { 
                            title: formData.color_name, 
                            hex: formData.color_hex
                        },
                        'get',
                        handleFormPreloadDataSuccess
                    )
            } catch (err) {
                console.log(err)
            }
        }
    }, [visible])

    return (
        <>
            {visible && (
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="w-full">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3 className="text-base font-semibold text-gray-900" id="modal-title">Edit Color Definition #{id}</h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">Update color definition details</p>
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
                                    }}>Save changes</button>
                                    <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={onClose}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ItemEditModal