import { useState } from 'react'
import ItemEditModal from "../../components/item-edit-modal"
import ItemRemoveModal from "../../components/item-remove-modal"

const ItemsListTable = ({ items }) => {

  const [isEditModalVisible, setisEdiTModalVisible] = useState(false)
  const [isRemoveModalVisible, setisRemoveTModalVisible] = useState(false)
  const handleItemEditClick = () => setisEdiTModalVisible(true)
  const handleItemEditClose = () => setisEdiTModalVisible(false)
  const handleItemRemoveClick = () => setisRemoveTModalVisible(true)
  const handleItemRemoveClose = () => setisRemoveTModalVisible(false)

  return (
    <>
      <div className="max-w-7xl w-full mt-8 bg-white rounded-md p-8 shadow-lg">
        <table className="table-auto w-full">
          <thead>
            <tr className="text-blue-600">
              <th className="w-1/3">Color name</th>
              <th className="w-1/3">Color hex</th>
              <th className="w-1/3">Action</th>
            </tr>
          </thead>
          <tbody>
            {items && items.length > 0 && items.map((item, index) => {
              return (
                <tr key={index} className="text-center">
                  <td>
                    {item.title}
                  </td>
                  <td>
                    {item.hex}
                  </td>
                  <td>
                    <button onClick={handleItemEditClick}>
                      <span className="text-4xl material-symbols-outlined">
                        edit_document
                      </span>
                    </button>
                    <button onClick={handleItemRemoveClick}>
                      <span className="material-symbols-outlined">
                        delete
                      </span>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <ItemEditModal visible={isEditModalVisible} onClose={handleItemEditClose} onSubmit={handleItemEditClose} />
      <ItemRemoveModal visible={isRemoveModalVisible} onClose={handleItemRemoveClose} onSubmit={handleItemRemoveClose} />
    </>
  )
}
export default ItemsListTable