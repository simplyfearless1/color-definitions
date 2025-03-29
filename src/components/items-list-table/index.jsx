import { useContext, useEffect, useState } from 'react'
import ItemEditModal from "../../components/item-edit-modal"
import ItemRemoveModal from "../../components/item-remove-modal"
import Spinner from '../spinner'
import Input from '../input'
import { ColorDefinitionsContext } from '../../context/colors'

const ItemsListTable = () => {
  const { colorDefinitions, loading } = useContext(ColorDefinitionsContext)
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [id, setId] = useState(0)
  const [isEditModalVisible, setisEdiTModalVisible] = useState(false)
  const [isRemoveModalVisible, setisRemoveTModalVisible] = useState(false)
  const handleInputChange = (e) => {
    const val = e.target.value
    setSearch(val)
  }
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
  const handleSearchResults = () => {
    const reg = new RegExp(search, 'i')
    setSearchResults(colorDefinitions.filter((item) => item.title.match(reg) || item.hex.match(reg)))
  }
  useEffect(() => {
    handleSearchResults()
  }, [search])

  return (
    <>
      {loading ? (
        <div className='mt-8'>
          <Spinner />
        </div>
      ) : (
        <div className="max-w-7xl w-full mt-8 bg-white rounded-md p-8 shadow-lg">
          <div className='relative mx-auto max-w-xl mb-3'>
            <span className="text-4xl material-symbols-outlined absolute bottom-1.5 left-1">
              search
            </span>
            <Input placeholder='Search colors using color name or hex...' value={search} handleChange={handleInputChange} id='search' name='search' classes='pl-5' type='search' />
          </div>
          <table className="table-auto w-full">
            <thead>
              <tr className="text-blue-600">
                <th className="w-1/3">Color name</th>
                <th className="w-1/3">Color hex</th>
                <th className="w-1/3">Action</th>
              </tr>
            </thead>
            <tbody>
              {colorDefinitions?.length > 0 && search.length === 0 &&
                colorDefinitions.map((item, index) => {
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
              {search.length > 0 && (
                searchResults.map((item, index) => {
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
                })
              )}
            </tbody>
          </table>
        </div>
      )}
      <ItemEditModal visible={isEditModalVisible} onClose={handleItemEditClose} onSubmit={handleItemEditClose} id={id} />
      <ItemRemoveModal visible={isRemoveModalVisible} onClose={handleItemRemoveClose} onSubmit={handleItemRemoveClose} id={id} />
    </>
  )
}
export default ItemsListTable