import { useEffect, useState } from 'react'
import ItemEditModal from "../../components/item-edit-modal"
import ItemRemoveModal from "../../components/item-remove-modal"

const ItemsListTable = ({ items }) => {

  const [id, setId] = useState(0)
  const [isEditModalVisible, setisEdiTModalVisible] = useState(false)
  const [isRemoveModalVisible, setisRemoveTModalVisible] = useState(false)
  const handleItemEditClick = (id) => {
    setId(id)
    setisEdiTModalVisible(true)
  }
  const handleItemEditClose = () => setisEdiTModalVisible(false)
  const handleItemRemoveClick = (id) => { 
    setId(id)
    setisRemoveTModalVisible(true) 
  }
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
            {items?.length > 0 && items.map((item, index) => {
              return (
                <tr key={index} className="text-center">
                  <td>
                    {item.title}
                  </td>
                  <td>
                    {item.hex}
                  </td>
                  <td>
                    <button onClick={() => handleItemEditClick(item.id)}>
                      <span className="text-4xl material-symbols-outlined">
                        edit_document
                      </span>
                    </button>
                    <button onClick={() => handleItemRemoveClick(item.id)}>
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
      <ItemEditModal visible={isEditModalVisible} onClose={handleItemEditClose} onSubmit={handleItemEditClose} id={id} />
      <ItemRemoveModal visible={isRemoveModalVisible} onClose={handleItemRemoveClose} onSubmit={handleItemRemoveClose} id={id} />
    </>
  )
}
export default ItemsListTable