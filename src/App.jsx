import ItemsListTable from "./components/items-list-table"
import PageHeader from "./components/page-header"

const App = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <PageHeader />
        <ItemsListTable />
      </div>
    </>
  )
}

export default App
