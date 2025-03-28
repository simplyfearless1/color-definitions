import { useEffect, useState } from "react"
import ItemsListTable from "./components/items-list-table"
import PageHeader from "./components/page-header"
import { request } from "./api"
import { API_ENDPOINTS } from './config/api'

const App = () => {
  const [itemsTable, setItemsTable] = useState([{title: '', hex: ''}])
  const handleDataSucess = async (res) => {
    const req = await res
    if(req.status === 200) {
      setItemsTable([...req.data])
    }
  }
  const fetchData = () => {
    request(API_ENDPOINTS.COLORS, '', 'get', handleDataSucess)
  }
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <PageHeader />
        <ItemsListTable items={itemsTable} />
      </div>
    </>
  )
}

export default App
