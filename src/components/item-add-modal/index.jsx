import Input from '../input'

const ItemAddModal = ({ visible, onClose, onSubmit }) => {

    const id = 0

    return (
        <>
            {visible && (
                <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
                    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div class="w-full">
                                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3 class="text-base font-semibold text-gray-900" id="modal-title">Add Color Definition{id}</h3>
                                            <div class="mt-2">
                                                <p class="text-sm text-gray-500">Create a new color definition</p>
                                            </div>
                                            <div class="w-full mt-3">
                                                <Input id='color_name' label='Color name' name='color_name' placeholder='White' />
                                            </div>
                                            <div class="w-full mt-3">
                                                <Input id='color_hex' label='Color hex' name='color_hex' placeholder='#ffffff' />
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button type="button" class="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-orange-500 sm:ml-3 sm:w-auto" onClick={onSubmit}>Publish</button>
                                    <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={onClose}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ItemAddModal