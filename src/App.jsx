import { useContext } from "react"
import ItemsListTable from "./components/items-list-table"
import PageHeader from "./components/page-header"
import { ColorDefinitionsContext } from './context/colors'

const App = () => {
  const { colorDefinitions, loading } = useContext(ColorDefinitionsContext)

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <PageHeader />
        <ItemsListTable items={colorDefinitions} loading={loading} />
      </div>
    </>
  )
}

export default App
