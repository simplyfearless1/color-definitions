import ItemsListTable from "./components/items-list-table"
import PageTitle from "./components/page-title"

function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <PageTitle />
        <ItemsListTable />
      </div>
    </>
  )
}

export default App
